// Centralized event data for the GUE NextGen Scholar timeline
export const events = [
  {
    id: 'gue-fundamentals',
    title: 'GUE Fundamentals',
    date: '2024-11',
    displayDate: 'November 2024',
    type: 'course',
    status: 'completed',
    description: 'The foundational course for all GUE training, covering fundamental diving skills, team protocols, and equipment configuration.',
    sections: {
      equipment: [
        'Backplate and wing system',
        'Primary light with Goodman handle',
        'Long hose configuration (7ft primary)',
        'Backup lights (2x)',
        'Double-ended bolt snaps',
        'Wet notes and backup mask'
      ],
      prerequisites: 'Open Water certification from any agency, comfortable in the water, and a passion for improving diving skills.',
      reflections: 'This course completely transformed my approach to diving. Learning proper buoyancy, trim, and propulsion techniques opened up a whole new world of underwater exploration. The emphasis on team diving and communication skills has made every dive safer and more enjoyable.'
    },
    images: []
  },
  {
    id: 'gue-drysuit-primer',
    title: 'GUE Drysuit Primer',
    date: '2024-11',
    displayDate: 'November 2024',
    type: 'workshop',
    status: 'completed',
    description: 'Introduction to drysuit diving, covering suit selection, buoyancy management, and emergency procedures.',
    sections: {
      equipment: [
        'Trilam or neoprene drysuit',
        'Drysuit undergarments',
        'Drysuit inflator hose',
        'Ankle weights (optional)',
        'Drysuit repair kit'
      ],
      prerequisites: 'GUE Fundamentals or equivalent training recommended.',
      reflections: 'Adding a drysuit to my diving opened up cold water possibilities. The initial learning curve was steep, but mastering buoyancy with a drysuit has been incredibly rewarding. Being able to dive comfortably in cold water extends my diving season significantly.'
    },
    images: []
  },
  {
    id: 'gue-performance-diver',
    title: 'GUE Performance Diver',
    date: '2025-11',
    displayDate: 'November 2025',
    type: 'course',
    status: 'completed',
    description: 'Advanced recreational course focusing on refined skills, navigation, gas planning, and rescue techniques.',
    sections: {
      equipment: [
        'Stage/deco bottle',
        'Primary reel',
        'Lift bag/SMB',
        'Compass',
        'Backup timing device',
        'Wet notes'
      ],
      prerequisites: 'GUE Fundamentals pass, 75+ logged dives, demonstrated proficiency in fundamental skills.',
      reflections: 'Performance Diver pushed my skills to new levels. The rescue scenarios were eye-opening, and the navigation exercises built real confidence for independent dive planning. This course bridges the gap between recreational and technical diving.'
    },
    images: []
  },
  {
    id: 'gue-doubles-primer',
    title: 'GUE Doubles Primer',
    date: '2025-11',
    displayDate: 'November 2025',
    type: 'workshop',
    status: 'completed',
    description: 'Introduction to double tank configuration, including manifold systems, valve drills, and emergency procedures.',
    sections: {
      equipment: [
        'Double tanks with isolation manifold',
        'Bands and bolts',
        'Extended backplate',
        'Isolation drill protocols',
        'Gas management calculations'
      ],
      prerequisites: 'GUE Fundamentals, comfortable with single tank diving, ready to increase gas capacity.',
      reflections: 'Doubles diving was intimidating at first, but the redundancy and extended bottom time are worth the added complexity. Valve drills have become second nature, and the peace of mind from having independent gas supplies is invaluable for longer dives.'
    },
    images: []
  },
  {
    id: 'fuxian-lake-workshop',
    title: 'Fuxian Lake China Workshop',
    date: '2025-12',
    displayDate: 'December 2025',
    type: 'workshop',
    status: 'completed',
    description: 'Special workshop at Fuxian Lake, one of the clearest and deepest freshwater lakes in China, exploring underwater archaeological sites.',
    sections: {
      equipment: [
        'Cold water configuration',
        'Extended exposure protection',
        'Underwater photography setup',
        'Navigation equipment',
        'Communication devices'
      ],
      prerequisites: 'Advanced diving certification, cold water experience, travel arrangements to Yunnan Province.',
      reflections: 'Fuxian Lake exceeded all expectations. The visibility was incredible, and exploring the submerged ancient structures was like diving into history. The local diving community was welcoming, and this trip combined adventure with cultural immersion.'
    },
    images: []
  },
  {
    id: 'blackwater-drysuit-doubles',
    title: 'Blackwater with Drysuit and Doubles',
    date: '2025-12',
    displayDate: 'December 2025',
    type: 'trip',
    status: 'completed',
    description: 'Night diving experience in open water, encountering pelagic creatures during their vertical migration, using full technical configuration.',
    sections: {
      equipment: [
        'Double tanks',
        'Drysuit with adequate thermal protection',
        'High-powered lights',
        'Macro photography setup',
        'Downlines with lights',
        'Safety equipment'
      ],
      prerequisites: 'Night diving experience, comfortable with doubles and drysuit, macro photography skills recommended.',
      reflections: 'Blackwater diving is otherworldly. Floating in the dark ocean surrounded by bioluminescent creatures while using technical equipment was challenging but magical. The combination of drysuit and doubles provided the thermal protection and gas supply needed for extended bottom time.'
    },
    images: []
  },
  {
    id: 'antarctica-diving',
    title: 'Antarctica Diving Trip',
    date: '2026-01',
    displayDate: 'January 2026',
    type: 'trip',
    status: 'completed',
    description: 'Expedition diving in the Southern Ocean, exploring ice formations, marine life, and the most remote diving destination on Earth.',
    sections: {
      equipment: [
        'Extreme cold water drysuit',
        'Multiple undergarment layers',
        'Heated undergarments (optional)',
        'Doubles with DIN valves',
        'Ice diving safety equipment',
        'Emergency signaling devices'
      ],
      prerequisites: 'Extensive drysuit experience, cold water diving certification, medical clearance, and expedition preparation.',
      reflections: 'Antarctica represents the pinnacle of diving adventures. The ice formations, leopard seals, penguins, and pristine underwater landscapes were beyond imagination. Every skill learned through GUE training was put to the test in these challenging conditions.'
    },
    images: []
  }
];

// Helper function to get event by ID
export const getEventById = (id) => events.find(event => event.id === id);

// Helper function to get events sorted by date
export const getEventsSortedByDate = () => {
  return [...events].sort((a, b) => {
    const dateA = new Date(a.date + '-01');
    const dateB = new Date(b.date + '-01');
    return dateA - dateB;
  });
};

// Helper function to get adjacent events for navigation
export const getAdjacentEvents = (currentId) => {
  const sorted = getEventsSortedByDate();
  const currentIndex = sorted.findIndex(e => e.id === currentId);
  return {
    previous: currentIndex > 0 ? sorted[currentIndex - 1] : null,
    next: currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null
  };
};

// Group events by month for timeline display
export const getEventsGroupedByMonth = () => {
  const sorted = getEventsSortedByDate();
  const grouped = {};

  sorted.forEach(event => {
    if (!grouped[event.date]) {
      grouped[event.date] = [];
    }
    grouped[event.date].push(event);
  });

  return grouped;
};
