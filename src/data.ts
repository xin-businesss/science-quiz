export interface Question {
  id: string;
  question: string;
  answer: string;
  hint: string;
}

export interface Chapter {
  id: string;
  title: string;
  questions: Question[];
}

export interface YearLevel {
  id: string;
  label: string;
  chapters: Chapter[];
}

export const QUIZ_DATA: YearLevel[] = [
  {
    id: 'p3',
    label: 'Primary 3',
    chapters: [
      {
        id: 'p3-diversity',
        title: 'Chapter 1: Diversity of Living Things',
        questions: [
          { id: '3-q1', question: 'What are the main characteristics of living things?', answer: 'Living things need air, food, and water; they grow, respond to changes, and reproduce.', hint: 'Think about what you need to survive and how you change over time.' },
          { id: '3-q2', question: 'How do fish breathe in water?', answer: 'Fish use gills to breathe by taking in dissolved oxygen from water.', hint: 'They have special slits on the sides of their heads.' }
        ]
      },
      {
        id: 'p3-materials',
        title: 'Chapter 2: Diversity of Materials',
        questions: [
          { id: '3-m1', question: 'Why is wood used to make furniture?', answer: 'Wood is strong and can float on water.', hint: 'Think about the properties that make a chair sturdy.' }
        ]
      }
    ]
  },
  {
    id: 'p4',
    label: 'Primary 4',
    chapters: [
      {
        id: 'p4-cycles',
        title: 'Chapter 1: Cycles in Plants',
        questions: [
          { id: '4-q1', question: 'What is the function of the stem?', answer: 'To transport water and mineral salts from the roots and support the plant.', hint: 'The part that holds the plant up and moves water.' },
          { id: '4-q2', question: 'What are the three stages in the life cycle of a plant?', answer: 'Seed, seedling, and adult plant.', hint: 'Think about how a bean grows in a jar.' }
        ]
      },
      {
        id: 'p4-matter',
        title: 'Chapter 2: Matter and its Three States',
        questions: [
          { id: '4-m1', question: 'What are the three states of matter?', answer: 'Solid, liquid, and gas.', hint: 'Think about ice, water, and steam.' }
        ]
      }
    ]
  },
  {
    id: 'p5',
    label: 'Primary 5',
    chapters: [
      {
        id: 'p5-human-systems',
        title: 'Chapter 1: Human Systems',
        questions: [
          { id: '5-q1', question: 'What is the main function of the respiratory system?', answer: 'To take in oxygen and remove carbon dioxide from the body.', hint: 'Think about what happens when you breathe.' },
          { id: '5-q2', question: 'What are the parts of the human circulatory system?', answer: 'Heart, blood, and blood vessels.', hint: 'Think about the pump and the "pipes" in your body.' }
        ]
      }
    ]
  },
  {
    id: 'p6',
    label: 'Primary 6',
    chapters: [
      {
        id: 'energy-in-food',
        title: 'Chapter 1: Energy in Food',
        questions: [
          { id: '1-1', question: 'Why do living things need energy?', answer: 'Energy needed for life processes: growth, movement, respiration.', hint: 'Think about what humans and animals do every day to stay alive and grow.' },
          { id: '1-2', question: 'Where does the energy in food originate from?', answer: 'Energy in food originates from the Sun.', hint: 'Everything starts with the giant star in our sky!' },
          { id: '1-3', question: 'How do plants obtain energy and make food?', answer: 'Plants use light energy from the Sun during photosynthesis to make food.', hint: 'Plants are like solar panels!' },
          { id: '1-4', question: 'What is photosynthesis?', answer: 'Carbon dioxide + water → food (glucose) + oxygen using light energy.', hint: 'Remember the chemical "recipe" plants use.' },
          { id: '1-5', question: 'Why are plants producers?', answer: 'Plants make their own food by photosynthesis.', hint: 'They "produce" their own meals!' },
          { id: '1-6', question: 'Why are animals consumers?', answer: 'Animals obtain energy by eating plants or other animals.', hint: 'They have to "consume" others to get energy.' },
          { id: '1-7', question: 'How is energy released from food?', answer: 'Respiration: food broken down using oxygen to release energy.', hint: 'It happens inside our cells when we breathe.' },
          { id: '1-8', question: 'What is respiration?', answer: 'Food (glucose) + oxygen → carbon dioxide + water + energy.', hint: 'It is the opposite of the photosynthesis recipe!' },
          { id: '1-9', question: 'How are photosynthesis and respiration related?', answer: 'Photosynthesis produces food and oxygen; respiration produces carbon dioxide used in photosynthesis.', hint: 'Plants and animals help each other in a cycle.' },
          { id: '1-10', question: 'Why does respiration increase during exercise?', answer: 'More energy needed for muscle movement.', hint: 'When you run, your body works harder!' },
          { id: '1-11', question: 'What is a food chain?', answer: 'Shows energy transfer from one organism to another.', hint: 'It is a linear sequence of "who eats whom".' },
          { id: '1-12', question: 'Why is energy lost in food chains?', answer: 'Energy used for life processes and lost as heat.', hint: 'Not all energy goes to the next level; some is used up.' },
          { id: '1-13', question: 'Why are fewer organisms found at higher trophic levels?', answer: 'Less energy available at each level of the food chain.', hint: 'The energy "pyramid" gets smaller at the top.' },
        ]
      },
      {
        id: 'forms-of-energy',
        title: 'Chapter 2: 8 Forms of Energy',
        questions: [
          { id: '2-1', question: 'What is energy?', answer: 'Energy is the ability to do work or cause change.', hint: 'Think about what you need to move a box or light a lamp.' },
          { id: '2-2', question: 'What are the eight forms of energy?', answer: 'Heat, light, sound, electrical, kinetic, chemical potential, elastic potential, gravitational potential.', hint: 'Try to remember the mnemonic or list types like sun, movement, battery.' },
          { id: '2-3', question: 'What happens to energy in a system?', answer: 'Energy cannot be created or destroyed but can be converted from one form to another.', hint: 'This is the Law of Conservation of Energy.' },
          { id: '2-4', question: 'What is kinetic energy?', answer: 'Kinetic energy is the energy of a moving object.', hint: 'Think about things in motion!' },
          { id: '2-5', question: 'What factors affect kinetic energy?', answer: 'Kinetic energy increases with greater mass and greater speed.', hint: 'A heavy truck vs a small car, or fast vs slow.' },
          { id: '2-6', question: 'What happens to kinetic energy when an object slows down?', answer: 'Kinetic energy is converted to heat and sound due to friction.', hint: 'Rub your hands together fast—what do you feel and hear?' },
          { id: '2-7', question: 'What is gravitational potential energy?', answer: 'Gravitational potential energy is stored energy due to height above the ground.', hint: 'Think about a ball perched on a high shelf.' },
          { id: '2-8', question: 'What factors affect gravitational potential energy?', answer: 'Gravitational potential energy increases with greater mass and greater height.', hint: 'How heavy is it and how high is it?' },
          { id: '2-9', question: 'What happens to gravitational potential energy when an object falls?', answer: 'Gravitational potential energy converts to kinetic energy as the object moves downward.', hint: 'Stored energy becomes movement energy.' },
          { id: '2-10', question: 'What is elastic potential energy?', answer: 'Elastic potential energy is stored energy in stretched or compressed objects such as springs or rubber bands.', hint: 'Think about a pulled rubber band.' },
          { id: '2-11', question: 'What factors affect elastic potential energy?', answer: 'Elastic potential energy increases when the object is stretched or compressed more.', hint: 'Pulling harder stores more energy!' },
          { id: '2-12', question: 'What is chemical potential energy?', answer: 'Chemical potential energy is stored energy in substances such as food, fuel and batteries.', hint: 'Energy hidden inside things we use for power.' },
          { id: '2-13', question: 'How is chemical potential energy used by living things?', answer: 'Chemical potential energy in food is converted to kinetic and heat energy during movement and activities.', hint: 'Food gives us energy to move and stay warm.' },
          { id: '2-14', question: 'What is electrical energy?', answer: 'Electrical energy is energy carried by moving electric charges in a circuit.', hint: 'The kind of energy that powers your gadgets.' },
          { id: '2-15', question: 'What is light energy?', answer: 'Light energy is energy that allows objects to be seen.', hint: 'It comes from the sun or bulbs.' },
          { id: '2-16', question: 'What is heat energy?', answer: 'Heat energy is energy transferred from a hotter object to a cooler object.', hint: 'Energy associated with temperature.' },
          { id: '2-17', question: 'What is sound energy?', answer: 'Sound energy is energy produced by vibrating objects.', hint: 'Speak out loud—what do your vocal cords do?' },
        ]
      },
      {
        id: 'forces',
        title: 'Chapter 3: Forces',
        questions: [
          { id: '3-1', question: 'What is a force?', answer: 'A force is a push or pull acting on an object.', hint: 'The most basic definition involving moving things.' },
          { id: '3-2', question: 'What are the effects of force?', answer: 'A force can start or stop motion, change speed, change direction, or change shape.', hint: 'Think about what happens to a ball when you kick it or squash it.' },
          { id: '3-3', question: 'What is frictional force?', answer: 'Frictional force is a force between two surfaces in contact that opposes motion.', hint: 'The "rubbing" force that slows things down.' },
          { id: '3-4', question: 'What factors affect frictional force?', answer: 'Friction increases with rougher surfaces and greater mass of the object.', hint: 'Is it smooth or bumpy? Heavy or light?' },
          { id: '3-5', question: 'How can friction be reduced?', answer: 'Friction can be reduced by using lubricants, wheels or ball bearings, and smoother surfaces.', hint: 'What makes things "slippery"?' },
          { id: '3-6', question: 'What is elastic spring force?', answer: 'Elastic spring force is a force exerted by a stretched or compressed spring or elastic object.', hint: 'Force from a spring trying to snap back.' },
          { id: '3-7', question: 'What happens when a spring is stretched or compressed?', answer: 'Elastic spring force acts to return the spring to its original length.', hint: 'The spring wants to be "normal" again.' },
          { id: '3-8', question: 'What is magnetic force?', answer: 'Magnetic force is a force of attraction or repulsion between magnets or magnetic materials.', hint: 'Force involved with north and south poles.' },
          { id: '3-9', question: 'What is gravitational force?', answer: 'Gravitational force is the force of attraction between objects with mass.', hint: 'The force that keeps us on Earth.' },
          { id: '3-10', question: 'What is weight?', answer: 'Weight is the gravitational force acting on an object.', hint: 'It is measured in Newtons and is related to gravity.' },
        ]
      },
      {
        id: 'living-together',
        title: 'Chapter 4: Living Together',
        questions: [
          { id: '4-1', question: 'What is an organism?', answer: 'An organism is a living thing.', hint: 'The umbrella term for plants, animals, and bacteria.' },
          { id: '4-2', question: 'What is a habitat?', answer: 'A habitat is the natural environment where an organism lives.', hint: 'An organism\'s "home".' },
          { id: '4-3', question: 'What conditions must a habitat provide?', answer: 'A habitat provides air, water, food, space and shelter.', hint: 'What are the 5 things you need to survive in your house?' },
          { id: '4-4', question: 'What is a population?', answer: 'A population is all organisms of the same species living in a habitat.', hint: 'A group of the same kind of animals.' },
          { id: '4-5', question: 'What is a community?', answer: 'A community is different populations living together in the same habitat.', hint: 'Different groups of animals sharing a space.' },
          { id: '4-6', question: 'What is interdependence?', answer: 'Interdependence means organisms depend on one another for survival.', hint: 'When living things "rely" on each other.' },
          { id: '4-7', question: 'What is a predator?', answer: 'A predator is an organism that hunts and eats other organisms.', hint: 'The hunter!' },
          { id: '4-8', question: 'What is prey?', answer: 'Prey is an organism that is hunted and eaten by a predator.', hint: 'The one being hunted.' },
          { id: '4-9', question: 'What is decomposition?', answer: 'Decomposition is the breakdown of dead organisms into simpler substances.', hint: 'Rotting and decay.' },
          { id: '4-10', question: 'Why are decomposers important?', answer: 'Decomposers return mineral salts and nutrients to the soil for plant growth.', hint: 'They "recycle" nutrients.' },
        ]
      },
      {
        id: 'adaptations',
        title: 'Chapter 5: Adaptations',
        questions: [
          { id: '5-1', question: 'What is adaptation?', answer: 'An adaptation is a structural or behavioural characteristic that helps an organism survive and reproduce in its habitat.', hint: 'Special features that help animals live.' },
          { id: '5-2', question: 'What are the two types of adaptation?', answer: 'Adaptations are structural adaptations and behavioural adaptations that increase survival in a habitat.', hint: 'Physical body parts vs how an animal acts.' },
          { id: '5-3', question: 'How does camouflage help an organism survive?', answer: 'Camouflage allows the organism to blend with its surroundings so predators cannot spot it easily.', hint: 'Merging into the background!' },
          { id: '5-4', question: 'Why do animals have streamlined bodies in water?', answer: 'A streamlined body reduces water resistance so the animal can swim faster to catch prey or escape predators.', hint: 'Helps them "slice" through water.' },
        ]
      },
      {
        id: 'people-and-environment',
        title: 'Chapter 6: People and Environment',
        questions: [
          { id: '6-1', question: 'What is pollution?', answer: 'Pollution is the release of harmful substances into the environment.', hint: 'Dirtying the earth with bad things.' },
          { id: '6-2', question: 'What are the main types of pollution?', answer: 'Air, water and land pollution harm living things and the environment.', hint: 'Think about where the pollution happens.' },
          { id: '6-3', question: 'How does burning fossil fuels cause global warming?', answer: 'Burning fossil fuels releases carbon dioxide which traps heat causing global warming.', hint: 'Releases a gas that acts like a blanket for Earth.' },
          { id: '6-4', question: 'How do trees prevent soil erosion and landslides?', answer: 'Roots hold soil together preventing it from being washed away.', hint: 'What part of the tree anchors the ground?' },
        ]
      }
    ]
  }
];
