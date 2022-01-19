import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const history = useHistory();

  const onMeetupSubmit = (meetupData) => {
    fetch('http://localhost:3030/new-meetup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meetupData),
    }).then(() => {
      history.replace('/');
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onMeetupSubmit={onMeetupSubmit} />
    </section>
  );
};

export default NewMeetupPage;
