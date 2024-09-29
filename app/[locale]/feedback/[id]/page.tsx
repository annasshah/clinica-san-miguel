'use client';
import { useState, useEffect } from 'react';
import StarRating from '@/components/StarRating';
import { Button } from '@/utils';
import { Textarea } from 'flowbite-react';
import { supabase } from '@/supabaseClient';
import { toast } from 'react-toastify';
import { useParams, useRouter } from 'next/navigation';

const initialForm = {
  rating: 0,
  feedback_text: ''
};

const PatientFeedback = () => {
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true); // State to manage fetching
  const route = useRouter();
  const { id } = useParams();

  // Function to fetch order details by ID
  const fetchOrderDetails = async () => {
    setFetching(true);
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('order_id', id)
        .single(); // Fetch a single order

      if (error) {
        throw error;
      }

      setOrderDetails(data);
    } catch (err) {
      setError('Order not found or an error occurred while fetching order details.');
    } finally {
      setFetching(false);
    }
  };

  // Fetch order details on component mount
  useEffect(() => {
    fetchOrderDetails();
  }, [id]);

  // Function to handle input changes
  const onChangeHandle = (key: string, val: string | number) => {
    setFormData((prev) => ({ ...prev, [key]: val }));
  };

  // Function to clear the form
  const clearFormHandle = () => {
    setFormData({ ...initialForm });
    setError('');
  };

  // Function to submit the feedback
  const submitHandle = async () => {
    const { rating, feedback_text } = formData;

    // Check if all fields are filled
    if (rating === 0 || feedback_text.trim() === '') {
      setError('Please provide both rating and feedback.');
      return;
    }

    // Proceed with submission to Supabase
    setError('');
    setLoading(true);
    const postData = {
      rating,
      feedback_text,
      order_id: id,
      patient_id: orderDetails.patient_id // This should ideally come from user context or props
    };

    try {
      const { data, error } = await supabase
        .from('feedback')
        .insert([postData])
        .select();

      if (error) {
        throw error;
      }

      route.push('/feedback/success');
      clearFormHandle(); // Reset the form
    } catch (err) {
      setError('An error occurred while submitting feedback. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Loader and error handling in render
  if (fetching) {
    return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex justify-center items-center text-red-600">{error}</div>;
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='space-y-5'>
        <div className='text-center text-xl'>
          <h1 className='text-customGray font-bold'>Your feedback is important for us!</h1>
          <p className='text-customGray font-bold'>
            Order no: <span className='text-red-700'>{orderDetails?.order_id}</span> {/* Assuming order_number field */}
          </p>
        </div>

        <div className='space-y-5'>
          <h1>Thank you for visiting Clínica San Miguel! We&apos;d love to hear your feedback to help us improve.</h1>

          {/* Rating Section */}
          <div className='flex items-center space-x-3'>
            <p className='text-lg font-bold text-customGray '>Rating:</p>
            <StarRating
              rating={formData.rating}
              changeRating={(e) => onChangeHandle('rating', e)}
              starDimension='25px'
            />
          </div>

          {/* Feedback Section */}
          <div className='space-y-2'>
            <p className='text-lg font-bold text-customGray '>Feedback:</p>
            <Textarea
              onChange={(e) => onChangeHandle('feedback_text', e.target.value)}
              rows={5}
              placeholder='Type your Feedback here'
              className='bg-transparent'
              value={formData.feedback_text}
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-600">{error}</p>}

          {/* Buttons */}
          <div className='w-full flex justify-end items-center space-x-3'>
            <Button
              text={'Clear'}
              size={{ width: '150px', height: '50px' }}
              bgColor={'#ffffff24'}
              textColor={'#343131'}
              onClick={clearFormHandle}
            />
            <Button
              text={loading ? 'Submitting...' : 'Submit'}
              size={{ width: '150px', height: '50px' }}
              bgColor={'#C1001F'}
              textColor={'#ffffff'}
              onClick={submitHandle}
              disabled={loading} // Disable button while submitting
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientFeedback;
