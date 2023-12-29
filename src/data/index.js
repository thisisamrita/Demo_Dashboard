import moment from "moment/moment";

export const cardsData = [
  {
    title: "Revenue",
    change: 24,
    amount: 65000,
  },
  {
    title: "Orders",
    change: -14,
    amount: 52000,
  },
  {
    title: "Expenses",
    change: 18,
    amount: 16000,
  },
  {
    title: "Profit",
    change: 12,
    amount: 500000,
  },
];

export const ordersData = [
  {
    name: "Notebooks",
    type: "Total",
    items: 58,
    change: 290,
  },
  {
    name: "Language courses",
    type: "Total",
    items: 12,
    change: 72
  },
  {
    name: "Office Collaboration",
    type: "Total",
    items: 7,
    change: 70
  },
  {
    name: "Robots",
    type: "Total",
    items: 21,
    change: 15
  }
]


export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};


let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Occasion',
    start: todayStr + 'T09:00:00',

  },
  {
    id: createEventId(),
    title: 'Neophyte Meet',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: "Head Meetup",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: createEventId(),
    title: "Payment Shedules",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]

export function createEventId() {
  return String(eventGuid++)
}


export const boardData = {
  columns: [
    {
      id: 1,
      title: "Pending",
      cards: [
        {
          id: 1,
          title: "Database Setup",
          description: "Firebase Integration"
        },
        {
          id: 2,
          title: "Data Flow",
          description: "Setup Diagram with other developers"
        },
      ]
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Data Table Page",
          description: "Server side",
        }
      ]
    },
    {
      id: 3,
      title: "Doing",
      cards: [
        {
          id: 10,
          title: "Full Calendar Extension",
          description: "Make new events"
        },
        {
          id: 11,
          title: "Custom Dashboard page",
          description: "Setup Dashboard as seperate page"
        }
      ]
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "Vite Server Setup",
          description: "Configure required modules and starters"
        },
        {
          id: 13,
          title: "Modular structre",
          description: "Write css in form of modules to reduce the naming conflicts"
        }
      ]
    }
  ]
}


export const userData = [
  {
    name: {
      firstName: 'Amrita',
      lastName: 'Pradhan',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Riya',
      lastName: 'Samal',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Ronita',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Shruti',
      lastName: 'Singh',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Aman',
      lastName: 'Poddar',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  }, {
    name: {
      firstName: 'Arman',
      lastName: 'Poddar',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Rohit',
      lastName: 'Ghosh',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Lucky',
      lastName: 'Mahanta',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Jayant',
      lastName: 'Kumar',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
]