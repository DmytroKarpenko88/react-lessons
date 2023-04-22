import { PageTitle } from 'components/PageTitile/PageTitle';
import { EventsBoard } from 'components/EventBoard/EventBoard';

export const App = () => {
  return (
    <div>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventsBoard />
    </div>
  );
};
