import { PageTitle } from 'components/PageTitile/PageTitle';
import { EventsBoard } from 'components/EventBoard/EventBoard';

import upcomingEvents from 'upcoming-events.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventsBoard events={upcomingEvents} />
    </Container>
  );
};
