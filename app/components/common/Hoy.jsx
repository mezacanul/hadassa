import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, formatDate, getJson, setOptions, localeEs } from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

setOptions({
  locale: localeEs,
  theme: 'ios',
  themeVariant: 'light'
});

const milestones = [
  {
    date: '2025-03-03T00:00',
    name: '',
    color: '#f5da7b',
  },
  {
    date: '2025-03-04T00:00',
    name: '',
    color: '#acf3a3',
  },
  {
    date: '2025-03-06T00:00',
    name: '',
    color: '#ff84a0',
  },
];

export default function Hoy() {
  const [myEvents, setEvents] = useState([]);

  const calView = useMemo(
    () => ({
      schedule: {
        type: 'week',
        allDay: false,
        startDay: 1,
        endDay: 1,
        startTime: '09:00',
        endTime: '18:00',
      },
    }),
    [],
  );

  const myResources = useMemo(
    () => [
      {
        id: 1,
        name: 'Hadassa',
        color: '#f7c4b4',
        img: "lsh1.png",
      },
      {
        id: 2,
        name: 'Aithana',
        color: '#c6f1c9',
        img: 'lsh2.png',
      },
      {
        id: 3,
        name: 'Eli',
        color: '#e8d0ef',
        img: 'lsh3.png',
      },
    ],
    [],
  );

  const renderCustomDay = useCallback((args) => {
    const date = args.date;
    // const dayNr = date.getDay();
    const task = milestones.find((obj) => +new Date(obj.date) === +date) || {};

    return (
      <div className="header-template-container">
        <div className="header-template-date">
          <div className="header-template-day-name">{formatDate('DDDD', date)}</div>
          <div className="header-template-day">{formatDate('MMMM DD', date)}</div>
        </div>
        <div className="header-template-task" style={{ background: task.color }}>
          {task.name}
        </div>
      </div>
    );
  }, []);

  const renderCustomResource = useCallback(
    (resource) => (
      <div className="header-resource-template-content">
        <img className="header-resource-avatar" src={resource.img} />
        <div className="header-resource-name">{resource.name}</div>
      </div>
    ),
    [],
  );

  useEffect(() => {
    getJson(
      'https://trial.mobiscroll.com/resource-events/',
      (events) => {
        setEvents(events);
      },
      'jsonp',
    );
  }, []);

  return (
    <Eventcalendar
      clickToCreate={true}
      dragToCreate={true}
      dragToMove={true}
      dragToResize={true}
      eventDelete={true}
      view={calView}
      data={myEvents}
      resources={myResources}
      groupBy="date"
      renderDay={renderCustomDay}
      renderResource={renderCustomResource}
    />
  );
}

