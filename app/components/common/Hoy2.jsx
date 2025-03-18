// app/components/Calendar.jsx
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { Box, Stack } from '@chakra-ui/react';

export default function Calendar() {
  const resources = [
    { id: 'a', title: 'Hadassa' },
    { id: 'b', title: 'Aithana' },
    { id: 'c', title: 'Eli' },
  ];

  const events = [
    { title: 'Meeting', start: '2025-03-08T10:00:00', end: '2025-03-08T11:00:00', resourceId: 'a' },
    { title: 'Call', start: '2025-03-08T10:30:00', end: '2025-03-08T11:30:00', resourceId: 'b' },
    { title: 'Task', start: '2025-03-08T11:00:00', end: '2025-03-08T12:00:00', resourceId: 'c' },
  ];

  return (
    <Box my={"2rem"}>
      <FullCalendar
        plugins={[timeGridPlugin, resourceTimeGridPlugin]}
        initialView="resourceTimeGridDay"
        resources={resources}
        events={events}
        initialDate="2025-03-08"
        slotMinTime="09:00:00"
        slotMaxTime="18:00:00"
        // contentHeight="auto"
        expandRows={true}
        height="90vh"
        headerToolbar={{ left: '', center: 'title', right: '' }}
      />
    </Box>
  );
}