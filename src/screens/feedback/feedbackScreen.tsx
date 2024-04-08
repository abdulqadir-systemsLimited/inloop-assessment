import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { Input } from '../../components';
import { setStorageData } from '../../utils/asyncStorage'

const FeedbackScreen = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [rating, setRating] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [ratingError, setRatingError] = useState<string>('');

  const handleSubmit = async () => {
    let isValid = true;

    if (!name) {
      setNameError('Name is required.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('Email is required.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!rating) {
      setRatingError('Star Rating is required.');
      isValid = false;
    } else {
      setRatingError('');
    }

    if (!isValid) {
      return;
    }


    const feedbackData = {
      name,
      email,
      rating,
      feedback,
      submittedAt: new Date().toISOString(),
    };

    try {
      await setStorageData('feedback', feedbackData);
      Alert.alert('Success', 'Feedback submitted successfully!');
    } catch (error) {
      console.log('Error storing feedback:', error);
      Alert.alert('Error', 'Failed to store feedback.');
    }

    setName('');
    setEmail('');
    setRating('');
    setFeedback('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Feedback</Text>
      <Input
        placeholder="Name"
        value={name}
        onChangeText={setName}
        error={nameError}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        error={emailError}
      />
      <Input
        placeholder="Star Rating (1-5)"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
        error={ratingError}
      />
      <Input
        placeholder="Feedback"
        value={feedback}
        onChangeText={setFeedback}
      />
      <Button title="Submit Feedback" onPress={handleSubmit} />
    </View>
  );
};

export default FeedbackScreen;
