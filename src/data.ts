export interface Question {
  id: string;
  question: string;
  answer: string;
  hint: string;
  type: 'RECITATION_TABLE' | 'MCQS' | 'OPEN_ENDED';
  options?: string[];
  imageUrl?: string;
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
        id: 'p3-living-things',
        title: 'Chapter 1: Living and Non-Living things',
        questions: [
          { id: '3-1-1', type: 'RECITATION_TABLE', question: 'What are the characteristics of living things?', answer: 'Living things grow, reproduce, respond to changes and need air, water and food.', hint: 'Think about what you do to stay alive.' },
          { id: '3-1-2', type: 'RECITATION_TABLE', question: 'What are non-living things?', answer: 'Non-living things do not grow, reproduce or respond to changes.', hint: 'Things that aren\'t alive don\'t do these.' },
          { id: '3-1-3', type: 'RECITATION_TABLE', question: 'What do living things need to survive?', answer: 'Living things need air, water and food.', hint: 'The big three for survival.' },
          { id: '3-1-4', type: 'RECITATION_TABLE', question: 'Why did the animal/insect/fish die in the container or tank?', answer: 'It did not have air or food to survive.', hint: 'Missing survival needs.' },
          { id: '3-1-5', type: 'RECITATION_TABLE', question: 'Why must containers have holes?', answer: 'To allow air in for breathing.', hint: 'Think about oxygen.' },
          { id: '3-1-6', type: 'RECITATION_TABLE', question: 'What is one difference between plants and animals?', answer: 'Plants make their own food, animals cannot.', hint: 'Photosynthesis vs Eaters.' },
          { id: '3-1-7', type: 'RECITATION_TABLE', question: 'Why is the animal classified as a bird?', answer: 'Birds have feathers and lay eggs.', hint: 'Unique bird traits.' },
          { id: '3-1-8', type: 'RECITATION_TABLE', question: 'Why is the animal classified as a mammal?', answer: 'Mammals have hair or fur and feed their young with milk.', hint: 'Unique mammal traits.' },
          { id: '3-1-9', type: 'RECITATION_TABLE', question: 'Why is the animal classified as a fish?', answer: 'Fish have gills, fins and scales and breathe through gills.', hint: 'Underwater traits.' },
          { id: '3-1-10', type: 'RECITATION_TABLE', question: 'Why is the animal classified as an insect?', answer: 'Insects have three body parts, six legs and one pair of antennae.', hint: 'Count the legs and parts.' },
          { id: '3-1-11', type: 'RECITATION_TABLE', question: 'What group do mushrooms belong to and how do they reproduce?', answer: 'Mushrooms are fungi and reproduce by spores.', hint: 'Not plants!' },
          { id: '3-1-12', type: 'RECITATION_TABLE', question: 'Why does fungus grow faster in warm wet places?', answer: 'Fungi grow well in warm and moist conditions.', hint: 'Mushrooms love these spots.' },
          { id: '3-1-13', type: 'RECITATION_TABLE', question: 'What are the main parts of a plant and their functions?', answer: 'Roots absorb water, stem supports the plant, leaves make food, flowers form fruit.', hint: 'Each part has a job.' },
          { id: '3-1-14', type: 'RECITATION_TABLE', question: 'How do water plants help fish survive?', answer: 'Water plants produce oxygen for fish to breathe.', hint: 'Breathing bubble producers.' }
        ]
      },
      {
        id: 'p3-materials',
        title: 'Chapter 2: Materials',
        questions: [
          { id: '3-2-1', type: 'RECITATION_TABLE', question: 'What are materials?', answer: 'Materials are substances used to make objects.', hint: 'Stuff things are made of.' },
          { id: '3-2-2', type: 'RECITATION_TABLE', question: 'Why are different materials used for different objects?', answer: 'Different materials have different properties suitable for different uses.', hint: 'The right tool for the job.' },
          { id: '3-2-3', type: 'RECITATION_TABLE', question: 'What is a property of a material?', answer: 'A property describes how a material behaves or what it is like.', hint: 'Characteristics.' },
          { id: '3-2-4', type: 'RECITATION_TABLE', question: 'What are common properties of materials?', answer: 'Common properties include strength, flexibility, transparency, waterproofness, absorbency and ability to float or sink.', hint: 'S-F-T-W-A-F/S' },
          { id: '3-2-5', type: 'RECITATION_TABLE', question: 'What does strong mean and why must some objects be strong?', answer: 'Strong materials can support heavy weight and do not break easily.', hint: 'Holding weight.' },
          { id: '3-2-6', type: 'RECITATION_TABLE', question: 'What does flexible mean and why must some objects be flexible?', answer: 'Flexible materials can bend easily without breaking.', hint: 'Bending trait.' },
          { id: '3-2-7', type: 'RECITATION_TABLE', question: 'What does transparent mean and why are transparent materials used?', answer: 'Transparent materials allow light to pass through so objects can be seen through them.', hint: 'Checking visibility.' },
          { id: '3-2-8', type: 'RECITATION_TABLE', question: 'What does opaque mean?', answer: 'Opaque materials do not allow light to pass through.', hint: 'Blocks vision.' },
          { id: '3-2-9', type: 'RECITATION_TABLE', question: 'What does waterproof mean and why are waterproof materials used?', answer: 'Waterproof materials do not allow water to pass through.', hint: 'Staying dry.' },
          { id: '3-2-10', type: 'RECITATION_TABLE', question: 'What does absorbent mean?', answer: 'Absorbent materials soak up water easily.', hint: 'Soaking sponges.' },
          { id: '3-2-11', type: 'RECITATION_TABLE', question: 'What does it mean when a material floats or sinks?', answer: 'Floating materials stay on the surface of water, while sinking materials go to the bottom.', hint: 'Top vs Bottom.' },
          { id: '3-2-12', type: 'RECITATION_TABLE', question: 'How do we choose a suitable material for an object?', answer: 'Choose a material with properties suitable for its function or use.', hint: 'Usage matching.' },
          { id: '3-2-13', type: 'RECITATION_TABLE', question: 'How do we conduct a fair test when comparing materials?', answer: 'Keep all variables the same except the one being tested.', hint: 'Fairness in science.' },
          { id: '3-2-14', type: 'RECITATION_TABLE', question: 'What variables must be kept the same in material experiments?', answer: 'Variables such as size, thickness or length of the materials must be kept the same.', hint: 'Consistent size.' },
          { id: '3-2-15', type: 'RECITATION_TABLE', question: 'How do we conclude which material is most suitable?', answer: 'The most suitable material has the required property for the object’s use.', hint: 'Final selection.' }
        ]
      },
      {
        id: 'p3-life-cycles',
        title: 'Chapter 3: Life Cycles',
        questions: [
          { id: '3-3-1', type: 'RECITATION_TABLE', question: 'What is a life cycle?', answer: 'A life cycle is the series of stages a living thing goes through from egg or birth to adult and reproduction.', hint: 'The circle of life.' },
          { id: '3-3-2', type: 'RECITATION_TABLE', question: 'What is a 4-stage life cycle?', answer: 'A 4-stage life cycle has egg → larva → pupa → adult stages.', hint: 'E-L-P-A' },
          { id: '3-3-3', type: 'RECITATION_TABLE', question: 'Which animals have a 4-stage life cycle?', answer: 'Animals such as butterflies, mosquitoes, beetles and houseflies have a 4-stage life cycle.', hint: 'Think of common insects.' },
          { id: '3-3-4', type: 'RECITATION_TABLE', question: 'What happens in the larva stage?', answer: 'In the larva stage, the organism feeds and grows quickly.', hint: 'Eating and growing.' },
          { id: '3-3-5', type: 'RECITATION_TABLE', question: 'What happens in the pupa stage?', answer: 'In the pupa stage, the organism changes into an adult.', hint: 'Transformation.' },
          { id: '3-3-6', type: 'RECITATION_TABLE', question: 'What happens in the adult stage?', answer: 'In the adult stage, the organism reproduces and lays eggs.', hint: 'Reproduction time.' },
          { id: '3-3-7', type: 'RECITATION_TABLE', question: 'What is a 3-stage life cycle?', answer: 'A 3-stage life cycle has egg → young → adult stages.', hint: 'E-Y-A' },
          { id: '3-3-8', type: 'RECITATION_TABLE', question: 'Which animals have a 3-stage life cycle?', answer: 'Animals such as frogs, grasshoppers and cockroaches have a 3-stage life cycle.', hint: 'Jumpers and crawlers.' },
          { id: '3-3-9', type: 'RECITATION_TABLE', question: 'What happens in the young stage?', answer: 'In the young stage, the organism looks like a smaller adult and grows into an adult.', hint: 'Looking like a mini adult.' },
          { id: '3-3-10', type: 'RECITATION_TABLE', question: 'What is one similarity between animal life cycles?', answer: 'A similarity is that both life cycles have an egg stage.', hint: 'Common starting point.' },
          { id: '3-3-11', type: 'RECITATION_TABLE', question: 'What is one difference between animal life cycles?', answer: 'A difference is that one life cycle has three stages while another has four stages.', hint: 'Count the stages.' },
          { id: '3-3-12', type: 'RECITATION_TABLE', question: 'Why do some animals lay many eggs?', answer: 'Animals lay many eggs so that some will survive even if others are eaten by predators.', hint: 'Survival strategy.' },
          { id: '3-3-13', type: 'RECITATION_TABLE', question: 'How does temperature affect the mosquito life cycle?', answer: 'Higher temperatures cause mosquitoes to grow faster, so the life cycle becomes shorter.', hint: 'Heat speed.' },
          { id: '3-3-14', type: 'RECITATION_TABLE', question: 'What are the stages of a plant life cycle?', answer: 'The stages of a plant life cycle are seed → young plant → adult plant → seeds produced.', hint: 'S-Y-A-S' },
          { id: '3-3-15', type: 'RECITATION_TABLE', question: 'What happens when plants grow too close together?', answer: 'Plants growing too close together compete for light, water and space.', hint: 'Fighting for survival space.' }
        ]
      },
      {
        id: 'p3-magnets',
        title: 'Chapter 4: Magnets',
        questions: [
          { id: '3-4-1', type: 'RECITATION_TABLE', question: 'What is a magnet?', answer: 'A magnet is an object that attracts magnetic materials such as iron and steel.', hint: 'Pulls things in.' },
          { id: '3-4-2', type: 'RECITATION_TABLE', question: 'What are magnetic materials?', answer: 'Magnetic materials are materials that can be attracted by a magnet (e.g. iron, steel).', hint: 'Things that stick.' },
          { id: '3-4-3', type: 'RECITATION_TABLE', question: 'What are non-magnetic materials?', answer: 'Non-magnetic materials cannot be attracted by a magnet (e.g. plastic, wood, glass, copper).', hint: 'Things that don\'t stick.' },
          { id: '3-4-4', type: 'RECITATION_TABLE', question: 'What are the poles of a magnet?', answer: 'A magnet has two poles: north pole and south pole.', hint: 'North and South.' },
          { id: '3-4-5', type: 'RECITATION_TABLE', question: 'Where is magnetic force strongest?', answer: 'Magnetic force is strongest at the poles of a magnet.', hint: 'The ends.' },
          { id: '3-4-6', type: 'RECITATION_TABLE', question: 'How do magnets interact?', answer: 'Unlike poles attract. Like poles repel.', hint: 'Opposites vs Match.' },
          { id: '3-4-7', type: 'RECITATION_TABLE', question: 'What happens when a magnet is near iron or steel?', answer: 'The magnet attracts the iron or steel object.', hint: 'Attraction.' },
          { id: '3-4-8', type: 'RECITATION_TABLE', question: 'Can magnetism pass through materials?', answer: 'Magnetism can pass through non-magnetic materials such as paper or plastic.', hint: 'Through things trait.' },
          { id: '3-4-9', type: 'RECITATION_TABLE', question: 'How can an iron bar be magnetised?', answer: 'An iron bar is magnetised by stroking it with one pole of a magnet repeatedly in one direction.', hint: 'Stroking method.' },
          { id: '3-4-10', type: 'RECITATION_TABLE', question: 'How does number of strokes affect magnet strength?', answer: 'More strokes → stronger magnetism.', hint: 'More effort trait.' },
          { id: '3-4-11', type: 'RECITATION_TABLE', question: 'How is an electromagnet made?', answer: 'Coil wire around an iron core and connect to a battery.', hint: 'Wire + Core + Battery.' },
          { id: '3-4-12', type: 'RECITATION_TABLE', question: 'How can an electromagnet be made stronger?', answer: 'Increase number of batteries or number of coils.', hint: 'Boost power or wraps.' },
          { id: '3-4-13', type: 'RECITATION_TABLE', question: 'Why will a silver or wooden rod not attract paper clips?', answer: 'Silver or wood is non-magnetic and cannot be magnetised.', hint: 'Material property.' },
          { id: '3-4-14', type: 'RECITATION_TABLE', question: 'How can a magnet lose magnetism?', answer: 'A magnet loses magnetism if heated, hammered or dropped many times.', hint: 'Rough handling effects.' },
          { id: '3-4-15', type: 'RECITATION_TABLE', question: 'How does distance affect magnetic force?', answer: 'Greater distance → weaker magnetic force.', hint: 'Farther trait.' },
          { id: '3-4-16', type: 'RECITATION_TABLE', question: 'How to obtain reliable results in magnet experiments?', answer: 'Repeat the experiment and average the results.', hint: 'Consistency rule.' },
          { id: '3-4-17', type: 'RECITATION_TABLE', question: 'How to ensure a fair test in magnet experiments?', answer: 'Keep all variables the same except the one tested.', hint: 'Fair test rule.' }
        ]
      }
    ]
  },
  {
    id: 'p4',
    label: 'Primary 4',
    chapters: [
      {
        id: 'p4-plant-systems',
        title: 'Chapter 1: Plant Systems',
        questions: [
          { id: '4-1-1', type: 'RECITATION_TABLE', question: 'What is the function of roots?', answer: 'Roots anchor the plant firmly in the ground and absorb water and mineral salts from the soil.', hint: 'Think about grip and drinking.' },
          { id: '4-1-2', type: 'RECITATION_TABLE', question: 'What is the function of the stem?', answer: 'The stem supports the plant and transports water and food to all parts of the plant.', hint: 'Think about holding up and moving things.' },
          { id: '4-1-3', type: 'RECITATION_TABLE', question: 'What is the function of leaves?', answer: 'Leaves trap sunlight to make food for the plant.', hint: 'Think about sun-catchers.' },
          { id: '4-1-4', type: 'RECITATION_TABLE', question: 'How do leaves make food?', answer: 'Chlorophyll in leaves traps sunlight to make food during photosynthesis.', hint: 'Think about the green pigment.' },
          { id: '4-1-5', type: 'RECITATION_TABLE', question: 'What are stomata?', answer: 'Stomata are tiny openings on leaves that allow gases to be exchanged between the plant and the surroundings.', hint: 'Think about tiny mouths for air.' },
          { id: '4-1-6', type: 'RECITATION_TABLE', question: 'What gases are exchanged through stomata?', answer: 'Carbon dioxide enters and oxygen exits the leaf.', hint: 'Think about what humans breathe in and out.' },
          { id: '4-1-7', type: 'RECITATION_TABLE', question: 'Why do stomata open wider during photosynthesis?', answer: 'To allow more gaseous exchange.', hint: 'Think about needing more air.' },
          { id: '4-1-8', type: 'RECITATION_TABLE', question: 'Why are more bubbles seen on the underside of leaves in water plants?', answer: 'There are more stomata on the underside of leaves.', hint: 'Think about where the air comes out.' },
          { id: '4-1-9', type: 'RECITATION_TABLE', question: 'What gas is released during photosynthesis?', answer: 'Oxygen.', hint: 'Think about the gas we need.' },
          { id: '4-1-10', type: 'RECITATION_TABLE', question: 'What are the two transport tubes in plants?', answer: 'Water-carrying tubes transport water from the roots to the rest of the plant, while food-carrying tubes transport food from the leaves to the rest of the plant.', hint: 'Xylem and Phloem.' },
          { id: '4-1-11', type: 'RECITATION_TABLE', question: 'How does water move in a plant?', answer: 'Water moves from the roots to the stem and then to the leaves and fruits.', hint: 'Think about bottom to top.' },
          { id: '4-1-12', type: 'RECITATION_TABLE', question: 'What happens if water-carrying tubes are removed?', answer: 'Water cannot reach the upper parts of the plant so the parts above the cut will die.', hint: 'Think about thirst.' },
          { id: '4-1-13', type: 'RECITATION_TABLE', question: 'What happens if food-carrying tubes are removed?', answer: 'Food cannot move downwards so food accumulates above the cut and the lower parts lack food.', hint: 'Think about hunger at the bottom.' },
          { id: '4-1-14', type: 'RECITATION_TABLE', question: 'Why does the stem swell above a ring-removed bark?', answer: 'Food accumulates above the cut because the food-carrying tubes were removed.', hint: 'Think about food buildup.' },
          { id: '4-1-15', type: 'RECITATION_TABLE', question: 'Why do fruits above the removed bark grow bigger?', answer: 'More food accumulates above the cut.', hint: 'Think about extra building materials.' },
          { id: '4-1-16', type: 'RECITATION_TABLE', question: 'Why will a plant eventually die after bark removal?', answer: 'Food cannot reach the roots so the roots die and cannot absorb water.', hint: 'Think about roots starving.' },
          { id: '4-1-17', type: 'RECITATION_TABLE', question: 'Why does a plant wilt when water transport is blocked?', answer: 'The leaves do not receive enough water.', hint: 'Think about losing firmness.' },
          { id: '4-1-18', type: 'RECITATION_TABLE', question: 'Why do plants bend towards sunlight?', answer: 'Plants grow towards sunlight to obtain light for making food.', hint: 'Think about getting closer to energy.' },
          { id: '4-1-19', type: 'RECITATION_TABLE', question: 'What conditions are needed for photosynthesis?', answer: 'Light and carbon dioxide are needed for photosynthesis.', hint: 'Sun + Air.' },
          { id: '4-1-20', type: 'RECITATION_TABLE', question: 'Where can plants store food?', answer: 'Plants may store food in roots, stems or leaves.', hint: 'Think about vegetables like carrots or potatoes.' }
        ]
      },
      {
        id: 'p4-human-systems',
        title: 'Chapter 2: Human Systems',
        questions: [
          { id: '4-2-1', type: 'RECITATION_TABLE', question: 'What are the three human body systems studied?', answer: 'The three human body systems are the digestive, circulatory and respiratory systems.', hint: 'D-C-R' },
          { id: '4-2-2', type: 'RECITATION_TABLE', question: 'How do the digestive, circulatory and respiratory systems work together?', answer: 'The digestive system absorbs digested food into the blood, the circulatory system transports digested food and oxygen to cells, and the respiratory system supplies oxygen for respiration.', hint: 'Think about logistics.' },
          { id: '4-2-3', type: 'RECITATION_TABLE', question: 'What is the function of the digestive system?', answer: 'The digestive system breaks down food into simpler substances and absorbs digested food into the blood.', hint: 'Think about breaking and taking.' },
          { id: '4-2-4', type: 'RECITATION_TABLE', question: 'What is the function of the mouth in digestion?', answer: 'The mouth chews food into smaller pieces.', hint: 'First step.' },
          { id: '4-2-5', type: 'RECITATION_TABLE', question: 'Why does chewing food help digestion?', answer: 'Chewing breaks food into smaller pieces and increases surface area for digestive juices to act faster.', hint: 'Think about small vs big pieces.' },
          { id: '4-2-6', type: 'RECITATION_TABLE', question: 'What is the function of the gullet?', answer: 'The gullet passes food from the mouth to the stomach and digestion does not occur there.', hint: 'The hallway.' },
          { id: '4-2-7', type: 'RECITATION_TABLE', question: 'What is the function of the stomach?', answer: 'The stomach breaks down food into simpler substances using digestive juices.', hint: 'The acid bath.' },
          { id: '4-2-8', type: 'RECITATION_TABLE', question: 'What is the function of the small intestine?', answer: 'The small intestine absorbs digested food into the blood.', hint: 'The nutrient door.' },
          { id: '4-2-9', type: 'RECITATION_TABLE', question: 'What is the function of the large intestine?', answer: 'The large intestine absorbs water from undigested food.', hint: 'The water taker.' },
          { id: '4-2-10', type: 'RECITATION_TABLE', question: 'What are the three parts of the circulatory system?', answer: 'The circulatory system consists of the heart, blood and blood vessels.', hint: 'H-B-BV' },
          { id: '4-2-11', type: 'RECITATION_TABLE', question: 'What is the function of the circulatory system?', answer: 'The circulatory system transports digested food and oxygen to cells and carries carbon dioxide away from cells.', hint: 'The transport system.' },
          { id: '4-2-12', type: 'RECITATION_TABLE', question: 'What is the function of the heart?', answer: 'The heart pumps blood through blood vessels to all parts of the body.', hint: 'The pump.' },
          { id: '4-2-13', type: 'RECITATION_TABLE', question: 'What is the function of blood vessels?', answer: 'Blood vessels transport blood throughout the body.', hint: 'The pipes.' },
          { id: '4-2-14', type: 'RECITATION_TABLE', question: 'What is the function of the respiratory system?', answer: 'The respiratory system takes in oxygen and removes carbon dioxide.', hint: 'The breathing system.' },
          { id: '4-2-15', type: 'RECITATION_TABLE', question: 'Why do cells need oxygen?', answer: 'Cells use oxygen for respiration to release energy from food.', hint: 'Think about burning fuel.' },
          { id: '4-2-16', type: 'RECITATION_TABLE', question: 'Why does limewater turn chalky when we blow into it?', answer: 'Limewater turns chalky because exhaled air contains carbon dioxide.', hint: 'Test for CO2.' }
        ]
      },
      {
        id: 'p4-matter',
        title: 'Chapter 3: Matter',
        questions: [
          { id: '4-3-1', type: 'RECITATION_TABLE', question: 'What is matter?', answer: 'Matter is anything that has mass and occupies space.', hint: 'Two main criteria.' },
          { id: '4-3-2', type: 'RECITATION_TABLE', question: 'What are the three states of matter?', answer: 'The three states of matter are solid, liquid and gas.', hint: 'Think about ice, water, and steam.' },
          { id: '4-3-3', type: 'RECITATION_TABLE', question: 'What are the properties of solids?', answer: 'Solids have a definite shape and a definite volume.', hint: 'Double definite.' },
          { id: '4-3-4', type: 'RECITATION_TABLE', question: 'What are the properties of liquids?', answer: 'Liquids have a definite volume but no definite shape and take the shape of the container.', hint: 'Think about water in a cup.' },
          { id: '4-3-5', type: 'RECITATION_TABLE', question: 'What are the properties of gases?', answer: 'Gases have no definite shape, no definite volume and can be compressed.', hint: 'Think about air.' },
          { id: '4-3-6', type: 'RECITATION_TABLE', question: 'Why can air be pumped into a container already filled with air?', answer: 'Air can be compressed and occupies space.', hint: 'Think about squishing air.' },
          { id: '4-3-7', type: 'RECITATION_TABLE', question: 'Why does a balloon change shape when pressed?', answer: 'The air inside the balloon can be compressed.', hint: 'Think about squeeze.' },
          { id: '4-3-8', type: 'RECITATION_TABLE', question: 'Why does water level rise when an object is placed in water?', answer: 'The object occupies space and displaces water.', hint: 'Think about taking up room.' },
          { id: '4-3-9', type: 'RECITATION_TABLE', question: 'Why will water overflow when another object is added into a full container?', answer: 'The added object occupies space and displaces more water.', hint: 'Think about over-filling.' },
          { id: '4-3-10', type: 'RECITATION_TABLE', question: 'How can we measure the volume of an irregular solid?', answer: 'Submerge the solid in water and measure the volume of water displaced.', hint: 'Think about dunking.' },
          { id: '4-3-11', type: 'RECITATION_TABLE', question: 'Why does the total volume remain the same after breaking a solid into smaller pieces?', answer: 'The amount of matter remains the same even though the shape changes.', hint: 'Think about Lego pieces.' },
          { id: '4-3-12', type: 'RECITATION_TABLE', question: 'Why does melted chocolate appear to occupy less space than chocolate cubes?', answer: 'Air spaces between cubes are removed when the chocolate melts.', hint: 'Think about packing.' },
          { id: '4-3-13', type: 'RECITATION_TABLE', question: 'Why must butter be melted before pouring into a mould?', answer: 'Liquid butter has no definite shape and takes the shape of the mould.', hint: 'Think about filling a shape.' },
          { id: '4-3-14', type: 'RECITATION_TABLE', question: 'Why can cubes be separated from water using a filter funnel?', answer: 'The solid cubes are trapped while the liquid water flows through.', hint: 'Think about a sieve.' },
          { id: '4-3-15', type: 'RECITATION_TABLE', question: 'What happens to the mass of an object when it is heated?', answer: 'The mass remains the same when heated.', hint: 'Mass doesn\'t change with heat.' },
          { id: '4-3-16', type: 'RECITATION_TABLE', question: 'Why does hot water cool after the flame is removed?', answer: 'The water loses heat to the cooler surroundings.', hint: 'Think about temperature balance.' },
          { id: '4-3-17', type: 'RECITATION_TABLE', question: 'Why can a container appear full but still hold more water?', answer: 'Air spaces between solids allow water to occupy the spaces.', hint: 'Think about filling gaps.' }
        ]
      },
      {
        id: 'p4-heat-energy',
        title: 'Chapter 4: Heat Energy',
        questions: [
          { id: '4-4-1', type: 'RECITATION_TABLE', question: 'What is heat?', answer: 'Heat is a form of energy.', hint: 'Not temperature.' },
          { id: '4-4-2', type: 'RECITATION_TABLE', question: 'What is temperature?', answer: 'Temperature measures how hot or cold an object is.', hint: 'Numerical measure.' },
          { id: '4-4-3', type: 'RECITATION_TABLE', question: 'In which direction does heat flow?', answer: 'Heat flows from a hotter region to a colder region.', hint: 'Think about flow.' },
          { id: '4-4-4', type: 'RECITATION_TABLE', question: 'What happens when an object gains heat?', answer: 'The object\'s temperature increases.', hint: 'Think about getting hotter.' },
          { id: '4-4-5', type: 'RECITATION_TABLE', question: 'What happens when an object loses heat?', answer: 'The object\'s temperature decreases.', hint: 'Think about getting colder.' },
          { id: '4-4-6', type: 'RECITATION_TABLE', question: 'Why does hot tea cool when left on a table?', answer: 'The tea loses heat to the cooler surroundings.', hint: 'Think about surroundings.' },
          { id: '4-4-7', type: 'RECITATION_TABLE', question: 'Why does a metal spoon become hot in hot water?', answer: 'The spoon gains heat from the hot water.', hint: 'Think about heat absorption.' },
          { id: '4-4-8', type: 'RECITATION_TABLE', question: 'What are conductors and insulators of heat?', answer: 'Conductors allow heat to pass through easily, while insulators do not allow heat to pass through easily.', hint: 'Pass vs Block.' },
          { id: '4-4-9', type: 'RECITATION_TABLE', question: 'Why are metal pots used for cooking but plastic or wooden handles used on pots?', answer: 'Metal conducts heat well so food cooks faster, while plastic or wood are poor conductors that reduce heat transfer to the hand.', hint: 'Fast cooking vs Safe handling.' },
          { id: '4-4-10', type: 'RECITATION_TABLE', question: 'Why does a cardboard sleeve reduce the heat felt on a cup?', answer: 'Cardboard is a poor conductor of heat and reduces heat transfer to the hand.', hint: 'Think about insulation.' },
          { id: '4-4-11', type: 'RECITATION_TABLE', question: 'What happens to materials when they gain or lose heat?', answer: 'Materials expand when heated and contract when cooled.', hint: 'Expand vs Contract.' },
          { id: '4-4-12', type: 'RECITATION_TABLE', question: 'Why are gaps left between railway tracks?', answer: 'The metal gains heat and expands, so gaps allow expansion.', hint: 'Think about room to grow.' },
          { id: '4-4-13', type: 'RECITATION_TABLE', question: 'How can heat loss be reduced so food cooks faster or stays warm longer?', answer: 'Reduce heat loss to the surroundings by covering the container with a lid or using a poor conductor of heat.', hint: 'Think about trapping heat.' }
        ]
      },
      {
        id: 'p4-light-energy',
        title: 'Chapter 5: Light Energy & Shadow',
        questions: [
          { id: '4-5-1', type: 'RECITATION_TABLE', question: 'What is light energy?', answer: 'Light is a form of energy.', hint: 'Visibility energy.' },
          { id: '4-5-2', type: 'RECITATION_TABLE', question: 'What are sources of light?', answer: 'Source of light = gives out light. Examples: Sun, lamp, torch, fire, candle flame.', hint: 'Things that shine.' },
          { id: '4-5-3', type: 'RECITATION_TABLE', question: 'How do we see objects?', answer: 'Light from a source is reflected by the object and enters our eyes. Pattern: source -> object -> reflected light -> eye.', hint: 'Bounce effect.' },
          { id: '4-5-4', type: 'RECITATION_TABLE', question: 'Why can\'t we see an object in a dark box / dark place unless there is light?', answer: 'Need light to see. Without light, no reflected light enters the eye.', hint: 'Reflection requirement.' },
          { id: '4-5-5', type: 'RECITATION_TABLE', question: 'How is a shadow formed?', answer: 'Light travels in a straight line. A shadow forms when an object blocks light.', hint: 'Blocking effect.' },
          { id: '4-5-6', type: 'RECITATION_TABLE', question: 'What are transparent, translucent and opaque materials?', answer: 'Transparent: allows most light to pass through; can see clearly. Translucent: allows some light to pass through; image blurred. Opaque: allows no light to pass through; blocks light.', hint: 'Clear vs Blurry vs Solid.' },
          { id: '4-5-7', type: 'RECITATION_TABLE', question: 'Why is glass / goggle lens used when we need to see through clearly?', answer: 'Choose a transparent material because it allows most light to pass through and lets us see clearly.', hint: 'High visibility.' },
          { id: '4-5-8', type: 'RECITATION_TABLE', question: 'Why are curtains / blackout curtains used for privacy?', answer: 'Choose the material that allows the least / no light to pass through. For privacy / blackout: opaque is best.', hint: 'Low visibility.' },
          { id: '4-5-9', type: 'RECITATION_TABLE', question: 'What property must a puppet-show screen have?', answer: 'The screen should allow some light to pass through. Think: translucent screen so the audience can view the shadow.', hint: 'Passing some light.' },
          { id: '4-5-10', type: 'RECITATION_TABLE', question: 'What material should be used to make the cut-outs / puppet pieces for the darkest shadow?', answer: 'Use an opaque material because it blocks light completely and gives the darkest shadow.', hint: 'Total blockage.' },
          { id: '4-5-11', type: 'RECITATION_TABLE', question: 'How do light sensors / dataloggers count objects or compare how much light passes through?', answer: 'When an object passes by, it blocks the light, so the reading drops. Count the dips to count the number of objects passing by. If reading does not go to zero, some light still passes through.', hint: 'Reading drops.' },
          { id: '4-5-12', type: 'RECITATION_TABLE', question: 'How does distance affect the size of a shadow?', answer: 'Closer to light source -> bigger shadow. Further from light source -> smaller shadow. To make shadow bigger: move object closer to torch / move screen further from object.', hint: 'Distance vs Size.' },
          { id: '4-5-13', type: 'RECITATION_TABLE', question: 'Why conduct a light experiment in a dark room?', answer: 'To ensure only the light from the source affects the results. No external light interference.', hint: 'Exclusivity.' },
          { id: '4-5-14', type: 'RECITATION_TABLE', question: 'What must be kept the same in a fair test for light / shadow experiments?', answer: 'Keep constant: light intensity, distance between light source and screen, size / thickness of materials. Rule: change one variable only.', hint: 'Fair test rules.' },
          { id: '4-5-15', type: 'RECITATION_TABLE', question: 'How can experiment results be made more reliable?', answer: 'Repeat the experiment several times and take the average.', hint: 'Consistency.' },
          { id: '4-5-16', type: 'RECITATION_TABLE', question: 'Why are shiny / reflective surfaces or reflective bands easily seen at night?', answer: 'Shiny / reflective surfaces reflect more light into our eyes. For visibility at night, choose the material that reflects the most light.', hint: 'High reflection.' },
          { id: '4-5-17', type: 'RECITATION_TABLE', question: 'Extra trap to memorise: if an object does not block the light path, the shadow will not change.', answer: 'No blocking of light path = no shadow change.', hint: 'Blocking requirement.' }
        ]
      }
    ]
  },
  {
    id: 'p5',
    label: 'Primary 5',
    chapters: [
      {
        id: 'p5-plant-human-reproduction',
        title: 'Chapter 1: Plant and Human Reproduction',
        questions: [
          { id: '5-1-1', type: 'RECITATION_TABLE', question: 'Why do plants reproduce?', answer: 'Plants reproduce to continue their species.', hint: 'Think about species survival.' },
          { id: '5-1-2', type: 'RECITATION_TABLE', question: 'What are the main reproductive parts of a flower?', answer: 'Anther, stigma, ovary and filament.', hint: 'A-S-O-F' },
          { id: '5-1-3', type: 'RECITATION_TABLE', question: 'What is pollination?', answer: 'Pollination is the transfer of pollen grains from the anther to the stigma.', hint: 'Moving pollen.' },
          { id: '5-1-4', type: 'RECITATION_TABLE', question: 'How do insects help pollination?', answer: 'Insects carry pollen grains from the anther of one flower to the stigma of another flower.', hint: 'Insect couriers.' },
          { id: '5-1-5', type: 'RECITATION_TABLE', question: 'What is fertilisation in plants?', answer: 'Fertilisation occurs when the male reproductive cell from pollen fuses with the egg cell in the ovule.', hint: 'Fusion of cells.' },
          { id: '5-1-6', type: 'RECITATION_TABLE', question: 'What happens to the ovule after fertilisation?', answer: 'The ovule develops into a seed.', hint: 'Future plant.' },
          { id: '5-1-7', type: 'RECITATION_TABLE', question: 'What happens to the ovary after fertilisation?', answer: 'The ovary develops into a fruit.', hint: 'Yummy part.' },
          { id: '5-1-8', type: 'RECITATION_TABLE', question: 'Why did a flower not develop into a fruit?', answer: 'Fertilisation did not occur.', hint: 'Fusion failed.' },
          { id: '5-1-9', type: 'RECITATION_TABLE', question: 'What are the stages of reproduction in flowering plants?', answer: 'Pollination → fertilisation → seed dispersal → germination.', hint: 'P-F-SD-G' },
          { id: '5-1-10', type: 'RECITATION_TABLE', question: 'What is seed dispersal?', answer: 'Seed dispersal is the scattering of seeds away from the parent plant.', hint: 'Moving away.' },
          { id: '5-1-11', type: 'RECITATION_TABLE', question: 'Why is seed dispersal important?', answer: 'It prevents overcrowding and reduces competition for light, water and space.', hint: 'Survival space.' },
          { id: '5-1-12', type: 'RECITATION_TABLE', question: 'How are seeds dispersed by wind?', answer: 'Seeds are light and small and can be carried by wind.', hint: 'Light as a feather.' },
          { id: '5-1-13', type: 'RECITATION_TABLE', question: 'How are seeds dispersed by animals?', answer: 'Animals eat fruits and pass out the seeds in their droppings away from the parent plant.', hint: 'Animal transport.' },
          { id: '5-1-14', type: 'RECITATION_TABLE', question: 'How are seeds dispersed by water?', answer: 'Fruits float and are carried away by water currents.', hint: 'Water travel.' },
          { id: '5-1-15', type: 'RECITATION_TABLE', question: 'How are seeds dispersed by splitting?', answer: 'The fruit splits open suddenly and flings the seeds away.', hint: 'Bursting open.' },
          { id: '5-1-16', type: 'RECITATION_TABLE', question: 'What feature allows seeds to stick to animals?', answer: 'Hooks or stiff hairs that attach to animal fur.', hint: 'Velcro-like.' },
          { id: '5-1-17', type: 'RECITATION_TABLE', question: 'Why can seeds dispersed by animals survive digestion?', answer: 'Seeds have tough seed coats that protect them.', hint: 'Armor plating.' },
          { id: '5-1-18', type: 'RECITATION_TABLE', question: 'What reproductive cells are produced in humans?', answer: 'Sperm cells in males and egg cells in females.', hint: 'Sperm vs Egg.' },
          { id: '5-1-19', type: 'RECITATION_TABLE', question: 'Which organ produces sperms?', answer: 'The testes produce sperms.', hint: 'Male organ.' },
          { id: '5-1-20', type: 'RECITATION_TABLE', question: 'Which organ produces eggs?', answer: 'The ovaries produce eggs.', hint: 'Female organ.' },
          { id: '5-1-21', type: 'RECITATION_TABLE', question: 'What is fertilisation in humans?', answer: 'Fertilisation occurs when a sperm cell fuses with an egg cell.', hint: 'Fusion in humans.' },
          { id: '5-1-22', type: 'RECITATION_TABLE', question: 'Where does fertilisation occur in humans?', answer: 'Fertilisation occurs in the fallopian tube (oviduct).', hint: 'The meeting place.' },
          { id: '5-1-23', type: 'RECITATION_TABLE', question: 'Where does the baby develop in the human body?', answer: 'The baby develops in the uterus.', hint: 'The womb.' },
          { id: '5-1-24', type: 'RECITATION_TABLE', question: 'What is heredity?', answer: 'Heredity is the passing of traits from parents to offspring.', hint: 'Inherited traits.' }
        ]
      },
      {
        id: 'p5-air-respiratory',
        title: 'Chapter 2: Air and Respiratory System',
        questions: [
          { id: '5-2-1', type: 'RECITATION_TABLE', question: 'What is air made of?', answer: 'Air is a mixture of gases mainly nitrogen, oxygen, carbon dioxide and water vapour.', hint: 'Gas brew.' },
          { id: '5-2-2', type: 'RECITATION_TABLE', question: 'Which gas supports respiration?', answer: 'Oxygen supports respiration in living things.', hint: 'Breathing gas.' },
          { id: '5-2-3', type: 'RECITATION_TABLE', question: 'Which gas remains unchanged when we breathe in and out?', answer: 'Nitrogen remains unchanged during breathing.', hint: 'Mostly inert.' },
          { id: '5-2-4', type: 'RECITATION_TABLE', question: 'What happens to oxygen and carbon dioxide during breathing?', answer: 'Oxygen is used during respiration while carbon dioxide is produced and exhaled.', hint: 'In vs Out.' },
          { id: '5-2-5', type: 'RECITATION_TABLE', question: 'What is respiration?', answer: 'Respiration uses oxygen to release energy from food and produces carbon dioxide and water.', hint: 'Energy release.' },
          { id: '5-2-6', type: 'RECITATION_TABLE', question: 'What is the function of the respiratory system?', answer: 'The respiratory system carries out gaseous exchange by taking in oxygen and removing carbon dioxide.', hint: 'Gas exchange.' },
          { id: '5-2-7', type: 'RECITATION_TABLE', question: 'Where does gaseous exchange take place in humans?', answer: 'Gaseous exchange takes place in the air sacs (alveoli) in the lungs.', hint: 'Sac sites.' },
          { id: '5-2-8', type: 'RECITATION_TABLE', question: 'How does oxygen in air reach the heart?', answer: 'Oxygen enters the nose, passes through the windpipe into the lungs, diffuses into the blood at the air sacs and is transported to the heart.', hint: 'Travel path.' },
          { id: '5-2-9', type: 'RECITATION_TABLE', question: 'Why does breathing rate increase during exercise?', answer: 'Breathing rate increases to take in more oxygen and remove carbon dioxide faster.', hint: 'Heavy breathing reasons.' },
          { id: '5-2-10', type: 'RECITATION_TABLE', question: 'How do fish obtain oxygen from water?', answer: 'Water flows over the gills where dissolved oxygen diffuses into the blood.', hint: 'Underwater breathing.' },
          { id: '5-2-11', type: 'RECITATION_TABLE', question: 'Why does limewater turn chalky when we blow into it?', answer: 'Exhaled carbon dioxide reacts with limewater to form a white precipitate.', hint: 'CO2 test.' },
          { id: '5-2-12', type: 'RECITATION_TABLE', question: 'What are stomata and their function?', answer: 'Stomata are tiny openings on leaves that allow gaseous exchange between the leaf and surroundings.', hint: 'Leaf pores.' },
          { id: '5-2-13', type: 'RECITATION_TABLE', question: 'Which gases are exchanged through stomata?', answer: 'Carbon dioxide enters the leaf while oxygen exits the leaf.', hint: 'Plant air.' },
          { id: '5-2-14', type: 'RECITATION_TABLE', question: 'Why are bubbles seen on leaves in water experiments?', answer: 'Oxygen produced during photosynthesis escapes from the leaf as bubbles.', hint: 'Plant bubbles.' },
          { id: '5-2-15', type: 'RECITATION_TABLE', question: 'Why are more bubbles seen on the underside of leaves?', answer: 'The underside has more stomata so more oxygen bubbles escape there.', hint: 'Stomata location.' },
          { id: '5-2-16', type: 'RECITATION_TABLE', question: 'How does number of leaves affect water loss?', answer: 'More leaves cause greater water loss because more stomata allow more transpiration.', hint: 'Leaf surface.' }
        ]
      },
      {
        id: 'p5-plant-transport',
        title: 'Chapter 3: Plant Transport System',
        questions: [
          { id: '5-3-1', type: 'RECITATION_TABLE', question: 'What are the two transport tubes in plants?', answer: 'Plants have water-carrying tubes (xylem) and food-carrying tubes (phloem).', hint: 'W-C and F-C tubes.' },
          { id: '5-3-2', type: 'RECITATION_TABLE', question: 'What is the function of water-carrying tubes?', answer: 'Water-carrying tubes transport water and mineral salts from roots to leaves.', hint: 'Water path.' },
          { id: '5-3-3', type: 'RECITATION_TABLE', question: 'What is the function of food-carrying tubes?', answer: 'Food-carrying tubes transport food made in leaves to all parts of the plant.', hint: 'Food path.' },
          { id: '5-3-4', type: 'RECITATION_TABLE', question: 'In which direction does water move in plants?', answer: 'Water moves from roots → stem → leaves through water-carrying tubes.', hint: 'Upwards.' },
          { id: '5-3-5', type: 'RECITATION_TABLE', question: 'In which direction does food move in plants?', answer: 'Food moves from leaves to all parts of the plant through food-carrying tubes.', hint: 'All directions.' },
          { id: '5-3-6', type: 'RECITATION_TABLE', question: 'Why do leaves change colour when the stem is placed in coloured water?', answer: 'Coloured water is transported through the water-carrying tubes to the leaves.', hint: 'Dye transport.' },
          { id: '5-3-7', type: 'RECITATION_TABLE', question: 'What do the coloured dots in a stem cross-section represent?', answer: 'They are water-carrying tubes transporting coloured water.', hint: 'Tube markers.' },
          { id: '5-3-8', type: 'RECITATION_TABLE', question: 'What happens when the outer ring of the stem is removed?', answer: 'Food-carrying tubes are removed so food cannot be transported to other parts of the plant.', hint: 'Removing bark.' },
          { id: '5-3-9', type: 'RECITATION_TABLE', question: 'Why does the stem swell above the cut when the outer ring is removed?', answer: 'Food accumulates above the cut because food-carrying tubes are removed.', hint: 'Food pileup.' },
          { id: '5-3-10', type: 'RECITATION_TABLE', question: 'Why do fruits grow larger above the ring-removed part of the stem?', answer: 'Food accumulates above the cut so more food is available for fruit growth.', hint: 'Extra food.' },
          { id: '5-3-11', type: 'RECITATION_TABLE', question: 'Why can the plant still transport water when the outer ring of the stem is removed?', answer: 'The water-carrying tubes remain intact so water can still be transported.', hint: 'Internal tubes.' },
          { id: '5-3-12', type: 'RECITATION_TABLE', question: 'Why will the plant eventually die after the outer ring of the stem is removed?', answer: 'Food cannot reach the roots so the roots die and the plant dies.', hint: 'Root starvation.' },
          { id: '5-3-13', type: 'RECITATION_TABLE', question: 'Why does damaging water-carrying tubes cause leaves to wilt?', answer: 'Water cannot be transported to the leaves so the leaves wilt.', hint: 'Losing water.' },
          { id: '5-3-14', type: 'RECITATION_TABLE', question: 'Why does damaging water-carrying tubes reduce photosynthesis?', answer: 'Less water reaches the leaves so photosynthesis decreases.', hint: 'Missing ingredient.' },
          { id: '5-3-15', type: 'RECITATION_TABLE', question: 'How can we show that roots absorb water?', answer: 'Place roots in coloured water and observe dye moving up the stem and leaves.', hint: 'Dye proof.' }
        ]
      },
      {
        id: 'p5-circulatory',
        title: 'Chapter 4: Circulatory System',
        questions: [
          { id: '5-4-1', type: 'RECITATION_TABLE', question: 'What are the three parts of the circulatory system?', answer: 'The circulatory system consists of the heart, blood and blood vessels.', hint: 'H-B-BV' },
          { id: '5-4-2', type: 'RECITATION_TABLE', question: 'What is the function of the circulatory system?', answer: 'The circulatory system transports oxygen and digested food to cells and carries carbon dioxide and other wastes away from cells.', hint: 'Logistics.' },
          { id: '5-4-3', type: 'RECITATION_TABLE', question: 'What is the function of the heart?', answer: 'The heart pumps blood through blood vessels to all parts of the body.', hint: 'The pump.' },
          { id: '5-4-4', type: 'RECITATION_TABLE', question: 'What is the function of blood vessels?', answer: 'Blood vessels transport blood throughout the body.', hint: 'The pipes.' },
          { id: '5-4-5', type: 'RECITATION_TABLE', question: 'What is the function of blood?', answer: 'Blood transports oxygen, digested food and carbon dioxide.', hint: 'The carrier.' },
          { id: '5-4-6', type: 'RECITATION_TABLE', question: 'Which blood vessel contains more oxygen?', answer: 'Blood near the lungs contains more oxygen because oxygen diffuses into the blood in the lungs.', hint: 'Fresh air.' },
          { id: '5-4-7', type: 'RECITATION_TABLE', question: 'Which blood vessel contains more carbon dioxide?', answer: 'Blood returning from body parts contains more carbon dioxide because cells produce carbon dioxide during respiration.', hint: 'Waste air.' },
          { id: '5-4-8', type: 'RECITATION_TABLE', question: 'Which substances are higher in blood after the lungs?', answer: 'Blood after the lungs contains more oxygen.', hint: 'Air uptake.' },
          { id: '5-4-9', type: 'RECITATION_TABLE', question: 'Which substances are higher in blood after the small intestine?', answer: 'Blood after the small intestine contains more digested food (nutrients).', hint: 'Food uptake.' },
          { id: '5-4-10', type: 'RECITATION_TABLE', question: 'Why does heart rate increase during exercise?', answer: 'The heart beats faster to pump more blood to deliver oxygen and nutrients to muscles.', hint: 'High demand.' },
          { id: '5-4-11', type: 'RECITATION_TABLE', question: 'Why does breathing rate increase during exercise?', answer: 'Breathing rate increases to take in more oxygen and remove carbon dioxide faster.', hint: 'Gas swap speed.' },
          { id: '5-4-12', type: 'RECITATION_TABLE', question: 'Why does more blood flow to leg muscles during running?', answer: 'More blood flows to the legs to supply more oxygen and nutrients to the muscles.', hint: 'Local demand.' },
          { id: '5-4-13', type: 'RECITATION_TABLE', question: 'Why does jogging after a meal reduce food absorption?', answer: 'Blood flows to the muscles instead of the small intestine, so less digested food is absorbed.', hint: 'Resource shift.' },
          { id: '5-4-14', type: 'RECITATION_TABLE', question: 'How do the digestive and circulatory systems work together?', answer: 'Digested food is absorbed into the blood in the small intestine and transported by the circulatory system to all parts of the body.', hint: 'Nutrition chain.' },
          { id: '5-4-15', type: 'RECITATION_TABLE', question: 'How do the respiratory and circulatory systems work together?', answer: 'Oxygen diffuses into the blood in the lungs and is transported by blood to all parts of the body.', hint: 'Oxygen chain.' }
        ]
      },
      {
        id: 'p5-water-states',
        title: 'Chapter 5: Water and 3 States',
        questions: [
          { id: '5-5-1', type: 'RECITATION_TABLE', question: 'What are the three states of water?', answer: 'Water exists as solid (ice), liquid (water) and gas (water vapour).', hint: 'Ice, Water, Steam.' },
          { id: '5-5-2', type: 'RECITATION_TABLE', question: 'What are the properties of solids, liquids and gases?', answer: 'Solid: definite shape and volume. Liquid: definite volume but no fixed shape. Gas: no definite shape and no definite volume.', hint: 'Shape/Volume test.' },
          { id: '5-5-3', type: 'RECITATION_TABLE', question: 'What happens when water gains heat?', answer: 'Water gains heat and changes state: ice melts to water and water evaporates or boils to form water vapour.', hint: 'Heating up.' },
          { id: '5-5-4', type: 'RECITATION_TABLE', question: 'What happens when water loses heat?', answer: 'Water loses heat and changes state: water vapour condenses to water and water freezes to ice.', hint: 'Cooling down.' },
          { id: '5-5-5', type: 'RECITATION_TABLE', question: 'What is melting?', answer: 'Melting is the change of state from solid to liquid when heat is gained.', hint: 'Solid to liquid.' },
          { id: '5-5-6', type: 'RECITATION_TABLE', question: 'What is freezing?', answer: 'Freezing is the change of state from liquid to solid when heat is lost.', hint: 'Liquid to solid.' },
          { id: '5-5-7', type: 'RECITATION_TABLE', question: 'What is evaporation?', answer: 'Evaporation is the change of liquid water to water vapour at the surface when heat is gained.', hint: 'Liquid to gas.' },
          { id: '5-5-8', type: 'RECITATION_TABLE', question: 'What is condensation?', answer: 'Condensation is the change of water vapour to liquid water when heat is lost.', hint: 'Gas to liquid.' },
          { id: '5-5-9', type: 'RECITATION_TABLE', question: 'What is boiling?', answer: 'Boiling is the change of liquid water to water vapour throughout the liquid when heated to its boiling point.', hint: 'Bubbling gas.' },
          { id: '5-5-10', type: 'RECITATION_TABLE', question: 'Why do water droplets form on cold surfaces such as cups, mirrors or windows?', answer: 'Water vapour in the air loses heat to the cooler surface and condenses into water droplets.', hint: 'Cold surface effect.' },
          { id: '5-5-11', type: 'RECITATION_TABLE', question: 'Why do wet clothes or towels dry faster in wind or higher temperature?', answer: 'Higher temperature or wind increases the rate of evaporation.', hint: 'Drying speed.' },
          { id: '5-5-12', type: 'RECITATION_TABLE', question: 'Why do people feel cold when water evaporates from their skin?', answer: 'Evaporation removes heat from the skin, causing cooling.', hint: 'Evaporative cooling.' },
          { id: '5-5-13', type: 'RECITATION_TABLE', question: 'How does temperature affect evaporation?', answer: 'Higher temperature increases the rate of evaporation.', hint: 'Heat speed.' },
          { id: '5-5-14', type: 'RECITATION_TABLE', question: 'How does surface area affect evaporation?', answer: 'Larger exposed surface area increases the rate of evaporation.', hint: 'Spread out speed.' },
          { id: '5-5-15', type: 'RECITATION_TABLE', question: 'Why does water vapour appear as mist or fog in cold air?', answer: 'Water vapour loses heat in cold air and condenses into tiny water droplets forming mist.', hint: 'Cold air effect.' },
          { id: '5-5-16', type: 'RECITATION_TABLE', question: 'Why does salt cause ice to melt faster?', answer: 'Salt lowers the melting point of ice, causing ice to melt faster.', hint: 'Freezing point drop.' },
          { id: '5-5-17', type: 'RECITATION_TABLE', question: 'Why is salt spread on icy roads?', answer: 'Salt lowers the melting point of ice so ice melts and roads become less slippery.', hint: 'Road safety.' }
        ]
      },
      {
        id: 'p5-electricity',
        title: 'Chapter 6: Electricity',
        questions: [
          { id: '5-6-1', type: 'RECITATION_TABLE', question: 'What is electricity?', answer: 'Electricity is the flow of electric current.', hint: 'Current flow.' },
          { id: '5-6-2', type: 'RECITATION_TABLE', question: 'What is an electric circuit?', answer: 'An electric circuit is a complete path for electric current to flow.', hint: 'Complete path.' },
          { id: '5-6-3', type: 'RECITATION_TABLE', question: 'What components are needed for a bulb to light up?', answer: 'A battery, wires, bulb and closed circuit are needed.', hint: 'Bulb basics.' },
          { id: '5-6-4', type: 'RECITATION_TABLE', question: 'Why will a bulb not light up in an open circuit?', answer: 'The circuit is incomplete so electric current cannot flow.', hint: 'Gap in path.' },
          { id: '5-6-5', type: 'RECITATION_TABLE', question: 'What happens when a switch is closed or opened?', answer: 'A closed switch completes the circuit and allows current to flow, while an open switch breaks the circuit and stops current.', hint: 'Gate status.' },
          { id: '5-6-6', type: 'RECITATION_TABLE', question: 'What is a conductor of electricity?', answer: 'A conductor is a material that allows electric current to flow easily.', hint: 'Electricity pass.' },
          { id: '5-6-7', type: 'RECITATION_TABLE', question: 'What is an insulator of electricity?', answer: 'An insulator is a material that does not allow electric current to flow.', hint: 'Electricity block.' },
          { id: '5-6-8', type: 'RECITATION_TABLE', question: 'Why will a circuit not work if metal is replaced with plastic?', answer: 'Plastic is an insulator so electric current cannot flow.', hint: 'Material check.' },
          { id: '5-6-9', type: 'RECITATION_TABLE', question: 'Why does a metal object cause a bulb or buzzer to work when it touches wires?', answer: 'The metal completes the circuit and allows electric current to flow.', hint: 'Conductive bypass.' },
          { id: '5-6-10', type: 'RECITATION_TABLE', question: 'How does a battery provide energy in a circuit?', answer: 'The battery converts chemical energy to electrical energy.', hint: 'Energy conversion.' },
          { id: '5-6-11', type: 'RECITATION_TABLE', question: 'How does increasing the number of batteries affect a bulb?', answer: 'Increasing the number of batteries makes the bulb brighter.', hint: 'More power.' },
          { id: '5-6-12', type: 'RECITATION_TABLE', question: 'How are bulbs connected in a series circuit?', answer: 'In a series circuit bulbs are connected in one loop.', hint: 'One loop.' },
          { id: '5-6-13', type: 'RECITATION_TABLE', question: 'What happens if one bulb fuses in a series circuit?', answer: 'If one bulb fuses the circuit is broken and all bulbs go off.', hint: 'Break in loop.' },
          { id: '5-6-14', type: 'RECITATION_TABLE', question: 'How are bulbs connected in a parallel circuit?', answer: 'In a parallel circuit bulbs are connected in separate branches.', hint: 'Multiple paths.' },
          { id: '5-6-15', type: 'RECITATION_TABLE', question: 'What happens if one bulb fuses in a parallel circuit?', answer: 'If one bulb fuses the other bulbs remain lit.', hint: 'Survivable fuse.' },
          { id: '5-6-16', type: 'RECITATION_TABLE', question: 'Why are bulbs brighter in a parallel circuit than in a series circuit?', answer: 'Each bulb receives full electrical energy from the battery.', hint: 'Full voltage.' },
          { id: '5-6-17', type: 'RECITATION_TABLE', question: 'Why are appliances connected in parallel circuits?', answer: 'Appliances in parallel circuits work independently even if one appliance fails.', hint: 'Independence.' },
          { id: '5-6-18', type: 'RECITATION_TABLE', question: 'Why does a bulb light when metal contacts touch?', answer: 'The metal completes the circuit so electric current flows.', hint: 'Metallic path.' }
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
          { id: '1-1', type: 'RECITATION_TABLE', question: 'Why do living things need energy?', answer: 'Energy needed for life processes: growth, movement, respiration.', hint: 'Think about staying alive and moving!' },
          { id: '1-2', type: 'RECITATION_TABLE', question: 'Where does the energy in food originate from?', answer: 'Energy in food originates from the Sun.', hint: 'Think about the center of our solar system.' },
          { id: '1-3', type: 'RECITATION_TABLE', question: 'How do plants obtain energy and make food?', answer: 'Plants use light energy from the Sun during photosynthesis to make food.', hint: 'The process plants use to feed themselves.' },
          { id: '1-4', type: 'RECITATION_TABLE', question: 'What is photosynthesis?', answer: 'Carbon dioxide + water → food (glucose) + oxygen using light energy.', hint: 'The formula for plant food.' },
          { id: '1-5', type: 'RECITATION_TABLE', question: 'Why are plants producers?', answer: 'Plants make their own food by photosynthesis.', hint: 'They don\'t eat other things; they "produce".' },
          { id: '1-6', type: 'RECITATION_TABLE', question: 'Why are animals consumers?', answer: 'Animals obtain energy by eating plants or other animals.', hint: 'They must "consume" other living things.' },
          { id: '1-7', type: 'RECITATION_TABLE', question: 'How is energy released from food?', answer: 'Respiration: food broken down using oxygen to release energy.', hint: 'Think about breathing and energy.' },
          { id: '1-8', type: 'RECITATION_TABLE', question: 'What is respiration?', answer: 'Food (glucose) + oxygen → carbon dioxide + water + energy.', hint: 'The process of releasing energy from food.' },
          { id: '1-9', type: 'RECITATION_TABLE', question: 'How are photosynthesis and respiration related?', answer: 'Photosynthesis produces food and oxygen; respiration produces carbon dioxide used in photosynthesis.', hint: 'It\'s a cycle between taking and giving.' },
          { id: '1-10', type: 'RECITATION_TABLE', question: 'Why does respiration increase during exercise?', answer: 'More energy needed for muscle movement.', hint: 'What do you need when you run?' },
          { id: '1-11', type: 'RECITATION_TABLE', question: 'What is a food chain?', answer: 'Shows energy transfer from one organism to another.', hint: 'The path energy takes through eating.' },
          { id: '1-12', type: 'RECITATION_TABLE', question: 'Why is energy lost in food chains?', answer: 'Energy used for life processes and lost as heat.', hint: 'Not all energy goes to the eater.' },
          { id: '1-13', type: 'RECITATION_TABLE', question: 'Why are fewer organisms found at higher trophic levels?', answer: 'Less energy available at each level of the food chain.', hint: 'The top of the pyramid has less energy.' }
        ]
      },
      {
        id: 'forms-of-energy',
        title: 'Chapter 2: 8 Forms of Energy',
        questions: [
          { id: '2-1', type: 'RECITATION_TABLE', question: 'What is energy?', answer: 'Energy is the ability to do work or cause change.', hint: 'The capacity to get things done.' },
          { id: '2-2', type: 'RECITATION_TABLE', question: 'What are the eight forms of energy?', answer: 'Heat, light, sound, electrical, kinetic, chemical potential, elastic potential, gravitational potential.', hint: 'H-L-S-E-K-C-E-G' },
          { id: '2-3', type: 'RECITATION_TABLE', question: 'What happens to energy in a system?', answer: 'Energy cannot be created or destroyed but can be converted from one form to another.', hint: 'The Law of Conservation of Energy.' },
          { id: '2-4', type: 'RECITATION_TABLE', question: 'What is kinetic energy?', answer: 'Kinetic energy is the energy of a moving object.', hint: 'Energy related to motion.' },
          { id: '2-5', type: 'RECITATION_TABLE', question: 'What factors affect kinetic energy?', answer: 'Kinetic energy increases with greater mass and greater speed.', hint: 'Weight and speed.' },
          { id: '2-6', type: 'RECITATION_TABLE', question: 'What happens to kinetic energy when an object slows down?', answer: 'Kinetic energy is converted to heat and sound due to friction.', hint: 'Rubbing surfaces create this.' },
          { id: '2-7', type: 'RECITATION_TABLE', question: 'What is gravitational potential energy?', answer: 'Gravitational potential energy is stored energy due to height above the ground.', hint: 'Energy from being high up.' },
          { id: '2-8', type: 'RECITATION_TABLE', question: 'What factors affect gravitational potential energy?', answer: 'Gravitational potential energy increases with greater mass and greater height.', hint: 'Weight and how high it is.' },
          { id: '2-9', type: 'RECITATION_TABLE', question: 'What happens to gravitational potential energy when an object falls?', answer: 'Gravitational potential energy converts to kinetic energy as the object moves downward.', hint: 'Storage energy becomes motion energy.' },
          { id: '2-10', type: 'RECITATION_TABLE', question: 'What is elastic potential energy?', answer: 'Elastic potential energy is stored energy in stretched or compressed objects such as springs or rubber bands.', hint: 'Squeezing or pulling something that snaps back.' },
          { id: '2-11', type: 'RECITATION_TABLE', question: 'What factors affect elastic potential energy?', answer: 'Elastic potential energy increases when the object is stretched or compressed more.', hint: 'Doing more to the spring increases its energy.' },
          { id: '2-12', type: 'RECITATION_TABLE', question: 'What is chemical potential energy?', answer: 'Chemical potential energy is stored energy in substances such as food, fuel and batteries.', hint: 'Stored in chemicals.' },
          { id: '2-13', type: 'RECITATION_TABLE', question: 'How is chemical potential energy used by living things?', answer: 'Chemical potential energy in food is converted to kinetic and heat energy during movement and activities.', hint: 'How bodies use food.' },
          { id: '2-14', type: 'RECITATION_TABLE', question: 'What is electrical energy?', answer: 'Electrical energy is energy carried by moving electric charges in a circuit.', hint: 'Flowing through wires.' },
          { id: '2-15', type: 'RECITATION_TABLE', question: 'What is light energy?', answer: 'Light energy is energy that allows objects to be seen.', hint: 'Photons and visibility.' },
          { id: '2-16', type: 'RECITATION_TABLE', question: 'What is heat energy?', answer: 'Heat energy is energy transferred from a hotter object to a cooler object.', hint: 'Thermal energy transfer.' },
          { id: '2-17', type: 'RECITATION_TABLE', question: 'What is sound energy?', answer: 'Sound energy is energy produced by vibrating objects.', hint: 'Vibrations we can hear.' },
          { id: '2-18', type: 'RECITATION_TABLE', question: 'What is a common energy conversion when objects move and stop?', answer: 'Kinetic energy is converted to heat and sound due to friction and air resistance.', hint: 'Stopping creates noise and warmth.' },
          { id: '2-19', type: 'RECITATION_TABLE', question: 'What energy conversion occurs when a falling object hits the ground?', answer: 'Gravitational potential energy converts to kinetic energy then to heat and sound energy.', hint: 'From high up to hitting the floor.' },
          { id: '2-20', type: 'RECITATION_TABLE', question: 'What energy conversion occurs in a torch or battery-powered device?', answer: 'Chemical potential energy converts to electrical energy then to light and heat energy.', hint: 'Battery → circuit → bulb.' }
        ]
      },
      {
        id: 'forces',
        title: 'Chapter 3: Forces',
        questions: [
          { id: '3-1', type: 'RECITATION_TABLE', question: 'What is a force?', answer: 'A force is a push or pull acting on an object.', hint: 'Push or Pull.' },
          { id: '3-2', type: 'RECITATION_TABLE', question: 'What are the effects of force?', answer: 'A force can start or stop motion, change speed, change direction, or change shape.', hint: 'Motion, speed, direction, shape.' },
          { id: '3-3', type: 'RECITATION_TABLE', question: 'What is frictional force?', answer: 'Frictional force is a force between two surfaces in contact that opposes motion.', hint: 'Resists movement between surfaces.' },
          { id: '3-4', type: 'RECITATION_TABLE', question: 'What factors affect frictional force?', answer: 'Friction increases with rougher surfaces and greater mass of the object.', hint: 'Bumps and weight.' },
          { id: '3-5', type: 'RECITATION_TABLE', question: 'How can friction be reduced?', answer: 'Friction can be reduced by using lubricants, wheels or ball bearings, and smoother surfaces.', hint: 'Oil, balls, or polish.' },
          { id: '3-6', type: 'RECITATION_TABLE', question: 'What is elastic spring force?', answer: 'Elastic spring force is a force exerted by a stretched or compressed spring or elastic object.', hint: 'Force from a spring.' },
          { id: '3-7', type: 'RECITATION_TABLE', question: 'What happens when a spring is stretched or compressed?', answer: 'Elastic spring force acts to return the spring to its original length.', hint: 'It wants to go back.' },
          { id: '3-8', type: 'RECITATION_TABLE', question: 'What is the relationship between load and spring extension?', answer: 'Greater load causes greater extension or compression of the spring.', hint: 'More weight means more stretch.' },
          { id: '3-9', type: 'RECITATION_TABLE', question: 'What is magnetic force?', answer: 'Magnetic force is a force of attraction or repulsion between magnets or magnetic materials.', hint: 'Force from magnets.' },
          { id: '3-10', type: 'RECITATION_TABLE', question: 'How do magnetic poles interact?', answer: 'Unlike poles attract while like poles repel.', hint: 'Opposites vs Same.' },
          { id: '3-11', type: 'RECITATION_TABLE', question: 'What is gravitational force?', answer: 'Gravitational force is the force of attraction between objects with mass.', hint: 'Gravity.' },
          { id: '3-12', type: 'RECITATION_TABLE', question: 'What is weight?', answer: 'Weight is the gravitational force acting on an object.', hint: 'Gravity\'s pull on mass.' },
          { id: '3-13', type: 'RECITATION_TABLE', question: 'What happens when an object is released?', answer: 'Gravitational force pulls the object towards the Earth causing it to accelerate downward.', hint: 'Falling.' },
          { id: '3-14', type: 'RECITATION_TABLE', question: 'What forces act on an object moving down a slope?', answer: 'Gravitational force pulls the object down the slope while frictional force opposes the motion.', hint: 'Gravity vs Friction.' },
          { id: '3-15', type: 'RECITATION_TABLE', question: 'What forces act on a hanging or stationary object?', answer: 'Gravitational force acts downward while elastic or support force acts upward.', hint: 'Down vs Up.' },
          { id: '3-16', type: 'RECITATION_TABLE', question: 'What happens when friction acts on a moving object?', answer: 'Friction slows down the object and converts kinetic energy to heat and sound energy.', hint: 'Slowing down effects.' },
          { id: '3-17', type: 'RECITATION_TABLE', question: 'Why does an object eventually stop moving on a surface?', answer: 'Frictional force opposes motion and gradually reduces the object\'s kinetic energy until it stops.', hint: 'Energy depletion via force.' },
          { id: '3-18', type: 'RECITATION_TABLE', question: 'Why does a heavier object require more force to move?', answer: 'A heavier object has greater gravitational force acting on it, increasing friction with the surface.', hint: 'Weight and friction interaction.' },
          { id: '3-19', type: 'RECITATION_TABLE', question: 'Why do objects slide further on smoother surfaces?', answer: 'Smoother surfaces produce less friction so less energy is lost and the object moves further.', hint: 'Low resistance.' },
          { id: '3-20', type: 'RECITATION_TABLE', question: 'What forces act on objects falling through air?', answer: 'Gravitational force pulls the object downward while air resistance opposes the motion.', hint: 'Gravity vs Air.' },
          {
            id: '3-m1',
            type: 'MCQS',
            question: 'Which of the following objects have forces acting on them?\nA. An apple that is on a tree\nB. A book that is placed on the floor\nC. A rocket that is in space',
            options: ['(1) A and B only', '(2) A and C only', '(3) B and C only', '(4) A, B and C'],
            answer: '(4) A, B and C',
            hint: 'Gravity acts on all objects with mass. Stationary objects often have balanced forces like gravity and normal force.'
          },
          {
            id: '3-m2',
            type: 'MCQS',
            question: 'A ball of plasticine is released from a height of eight metres. Which of the following is likely to occur when the ball of plasticine lands on the ground?\nA. Its shape changes.\nB. Its weight changes.\nC. Its position changes.',
            options: ['(1) A and B only', '(2) A and C only', '(3) B and C only', '(4) A, B and C'],
            answer: '(2) A and C only',
            hint: 'Impact forces can deform objects and stop their motion. Weight is a property of mass and gravity.'
          },
          {
            id: '3-m3',
            type: 'MCQS',
            question: 'Two identical objects, P and Q, are hung from a ceiling. Object P is pushed towards Q, but Q moves away without physical contact. Which of the following is true?',
            options: ['(1) Objects P and Q have different weights.', '(2) No gravitational force acts on object P.', '(3) Objects P and Q have a magnetic force of repulsion acting between them.', '(4) Less elastic spring force acts on object Q than on object P.'],
            answer: '(3) Objects P and Q have a magnetic force of repulsion acting between them.',
            hint: 'Movement without contact often implies magnetic or electrostatic forces. "Moving away" suggests repulsion.',
            imageUrl: '/diagrams/p6_forces_3m3.svg'
          },
          {
            id: '3-m4',
            type: 'MCQS',
            question: 'An object, C, was pulled across a surface, D. Which of the following are true?\nA. More force would be needed to pull object C across a surface that was smoother than surface D.\nB. If oil was applied on surface D, the reading on the spring balance would decrease.\nC. The amount of force used to pull object C across surface D would remain the same if the force was applied in the other direction.',
            options: ['(1) A and B only', '(2) A and C only', '(3) B and C only', '(4) A, B and C'],
            answer: '(3) B and C only',
            hint: 'Smoothness and lubricants reduce friction. Friction opposes motion in any direction.',
            imageUrl: '/diagrams/p6_forces_3m4.svg'
          },
          {
            id: '3-m6',
            type: 'MCQS',
            question: 'The diagram shows a racing car. Which of the following statement(s) is/are correct about the racing car?\nA. It has a streamlined body to move faster.\nB. It has a streamlined body to reduce air resistance.\nC. Its mass is reduced to move faster.',
            options: ['(1) A only', '(2) B only', '(3) A and B only', '(4) A, B and C'],
            answer: '(3) A and B only',
            hint: 'Streamlining specifically addresses reducing fluid resistance (air or water).',
            imageUrl: '/diagrams/p6_forces_streamlined.svg'
          },
          {
            id: '3-m12',
            type: 'MCQS',
            question: 'Wei Long compared the roughness of four surfaces. Based on the results in the table (Surface D: 290, E: 620, F: 180, G: 950), which of the following conclusions are correct?\nA. Surface F was the roughest and surface G was the smoothest.\nB. Surface E was smoother than surface F but rougher than surface G.\nC. The frictional force between the shoe and surface F was the least.\nD. The frictional force between the shoe and surface D was less than the frictional force between the shoe and surface E.',
            options: ['(1) A and B only', '(2) A and C only', '(3) B and C only', '(4) C and D only'],
            answer: '(4) C and D only',
            hint: 'Rougher surfaces require more force to overcome higher friction. Check the force units for each surface.'
          },
          {
            id: '3-o15',
            type: 'OPEN_ENDED',
            question: 'Rita placed one plastic sheet between a magnet and a suspended steel paper clip. (a) When Rita moved the magnet under the plastic sheet, the paper clip moved too. Why? (b) Rita replaced the plastic with a steel sheet; the paper clip did not move. Why? (c) What is the conclusion?',
            answer: '(a) The magnet could attract the steel paper clip through the plastic sheet. (b) The magnet was attracted to the steel sheet and could not attract the steel paper clip through the steel sheet. (c) Magnetic force can only pass through non-magnetic materials.',
            hint: 'Consider how magnetic vs non-magnetic materials interact with magnetic fields.',
            imageUrl: '/diagrams/p6_forces_3o15.svg'
          },
          {
            id: '3-o16',
            type: 'OPEN_ENDED',
            question: 'Kaiyun investigated frictional force using blocks made of Stone, Plastic, and Metal on a ramp. (a) Explain why Kaiyun used three blocks made of different materials in the experiment. (b) Based on the results (Plastic: 1.6s, Metal: 2.7s, Stone: 4.3s), which block reached the floor first? Explain why. (c) How would the results change if the surface of the ramp had water on it? Explain your answer.',
            answer: '(a) Different materials have different textures, resulting in different amounts of frictional force between the blocks and the ramp. (b) Plastic (Block Y). It has the smoothest surface, so frictional force between it and the ramp was the least, allowing it to move down the ramp most quickly. (c) The blocks would move down the ramp more quickly. Water acts as a lubricant and reduces the frictional force between the blocks and the ramp.',
            hint: 'Texture affects friction. Surface speed depends on how much friction resists the downward pull.',
            imageUrl: '/diagrams/p6_forces_3o16.svg'
          },
          {
            id: '3-o18',
            type: 'OPEN_ENDED',
            question: 'A man pushed a box over surfaces P, Q, R, and S. (a) Based on the results in the graph, which surface is roughest? (b) Suggest the relationship between the roughness of the surface and the amount of heat gained by the box when it moved over the surface. Explain your answer. (c) If some lubricant was applied on surface S, predict the amount of force needed to move the box over the surface over the same distance.',
            answer: '(a) Surface S. (b) The rougher the surface, the more heat gained by the box. When the surface was rougher, there was more frictional force between the surface and the box, thus more heat was produced. (c) The amount of force needed would decrease.',
            hint: 'Friction generates heat. Roughness increases friction.',
            imageUrl: '/diagrams/p6_forces_3o18.svg'
          },
          {
            id: '3-o20',
            type: 'OPEN_ENDED',
            question: 'Zack suspended a steel paper clip using a magnet attached to a retort stand. (a) Name two forces that acted on the steel paper clip. (b) What would Zack observe if he used a copper ring instead of a steel paper clip? (c) Zack hit the magnet 12 times with a hammer. (i) Explain why the steel paper clip did not float in the air. (ii) Suggest what Zack could do to make the steel paper clip float in the air again.',
            answer: '(a) Magnetic force of attraction and gravitational force. (b) The copper ring would not be attracted by the magnet as copper is a non-magnetic material. (c) (i) The magnet became weaker after it was hit by the hammer. Thus, the magnetic force of attraction between the magnet and the paper clip decreased. (ii) He could lower the position of the magnet.',
            hint: 'Magnetic pull must balance gravity for objects to "float". Hammering ruins magnetic alignment.',
            imageUrl: '/diagrams/p6_forces_3o20.svg'
          }
        ]
      },
      {
        id: 'living-together',
        title: 'Chapter 4: Living Together',
        questions: [
          { id: '4-1', type: 'RECITATION_TABLE', question: 'What is an organism?', answer: 'An organism is a living thing.', hint: 'Anything alive.' },
          { id: '4-2', type: 'RECITATION_TABLE', question: 'What is a habitat?', answer: 'A habitat is the natural environment where an organism lives.', hint: 'Where things live.' },
          { id: '4-3', type: 'RECITATION_TABLE', question: 'What conditions must a habitat provide?', answer: 'A habitat provides air, water, food, space and shelter.', hint: 'The 5 survival needs.' },
          { id: '4-4', type: 'RECITATION_TABLE', question: 'What is a population?', answer: 'A population is all organisms of the same species living in a habitat.', hint: 'Group of same kind.' },
          { id: '4-5', type: 'RECITATION_TABLE', question: 'What is a community?', answer: 'A community is different populations living together in the same habitat.', hint: 'Many species together.' },
          { id: '4-6', type: 'RECITATION_TABLE', question: 'What is interdependence?', answer: 'Interdependence means organisms depend on one another for survival.', hint: 'Depending on each other.' },
          { id: '4-7', type: 'RECITATION_TABLE', question: 'What are living and non-living factors affecting survival?', answer: 'Living factors: predators, prey, competitors. Non-living factors: light, water, temperature, air.', hint: 'Biotic vs Abiotic.' },
          { id: '4-8', type: 'RECITATION_TABLE', question: 'What is a predator?', answer: 'A predator is an organism that hunts and eats other organisms.', hint: 'The hunter.' },
          { id: '4-9', type: 'RECITATION_TABLE', question: 'What is prey?', answer: 'Prey is an organism that is hunted and eaten by a predator.', hint: 'The hunted.' },
          { id: '4-10', type: 'RECITATION_TABLE', question: 'How does prey population affect predator population?', answer: 'More prey increases predator population; less prey decreases predator population.', hint: 'Food supply effect.' },
          { id: '4-11', type: 'RECITATION_TABLE', question: 'How does predator population affect prey population?', answer: 'More predators decrease prey population; fewer predators increase prey population.', hint: 'Hunting pressure effect.' },
          { id: '4-12', type: 'RECITATION_TABLE', question: 'How does competition affect populations?', answer: 'Competition for food, water, space or light decreases population size.', hint: 'Fighting for resources.' },
          { id: '4-13', type: 'RECITATION_TABLE', question: 'Why do producers affect populations in a habitat?', answer: 'Producers make food by photosynthesis and provide energy for consumers.', hint: 'Starting point of energy.' },
          { id: '4-14', type: 'RECITATION_TABLE', question: 'Why are fish found in areas with plants and light?', answer: 'Plants photosynthesise and produce oxygen for fish respiration.', hint: 'Oxygen source.' },
          { id: '4-15', type: 'RECITATION_TABLE', question: 'What is decomposition?', answer: 'Decomposition is the breakdown of dead organisms into simpler substances.', hint: 'Breaking down waste.' },
          { id: '4-16', type: 'RECITATION_TABLE', question: 'Why are decomposers important?', answer: 'Decomposers return mineral salts and nutrients to the soil for plant growth.', hint: 'Recycling nutrients.' },
          { id: '4-17', type: 'RECITATION_TABLE', question: 'How does deforestation affect organisms?', answer: 'Deforestation destroys habitats and reduces organism populations.', hint: 'Cutting trees effect.' },
          { id: '4-18', type: 'RECITATION_TABLE', question: 'How does pollution affect organisms in a habitat?', answer: 'Pollution reduces suitable living conditions and decreases population size.', hint: 'Bad environment effect.' }
        ]
      },
      {
        id: 'adaptations',
        title: 'Chapter 5: Adaptations',
        questions: [
          { id: '5-1', type: 'RECITATION_TABLE', question: 'What is adaptation?', answer: 'An adaptation is a structural or behavioural characteristic that helps an organism survive and reproduce in its habitat.', hint: 'Surviving and reproducing.' },
          { id: '5-2', type: 'RECITATION_TABLE', question: 'What are the two types of adaptation?', answer: 'Adaptations are structural adaptations and behavioural adaptations that increase survival in a habitat.', hint: 'Body vs Action.' },
          { id: '5-3', type: 'RECITATION_TABLE', question: 'How does camouflage help an organism survive?', answer: 'Camouflage allows the organism to blend with its surroundings so predators cannot spot it easily.', hint: 'Hiding in plain sight.' },
          { id: '5-4', type: 'RECITATION_TABLE', question: 'How do body structures help animals catch prey or escape predators?', answer: 'Body structures such as sharp claws, teeth, streamlined body or strong limbs help catch prey or escape predators.', hint: 'Physical tools.' },
          { id: '5-5', type: 'RECITATION_TABLE', question: 'Why do animals have streamlined bodies in water?', answer: 'A streamlined body reduces water resistance so the animal can swim faster to catch prey or escape predators.', hint: 'Reducing drag.' },
          { id: '5-6', type: 'RECITATION_TABLE', question: 'How do webbed feet help animals survive in water?', answer: 'Webbed feet increase surface area pushing against water, allowing faster swimming.', hint: 'Paddling efficiently.' },
          { id: '5-7', type: 'RECITATION_TABLE', question: 'How do transparent bodies help marine organisms survive?', answer: 'Transparent bodies make the organism less visible to predators in water.', hint: 'See-through protection.' },
          { id: '5-8', type: 'RECITATION_TABLE', question: 'How do eyes adapted for dim light help survival?', answer: 'Large or specialised eyes receive more light so the organism can see clearly in dim environments.', hint: 'Seeing in the dark.' },
          { id: '5-9', type: 'RECITATION_TABLE', question: 'Why do plants grow tall or have long stalks?', answer: 'Tall stems allow leaves to receive more sunlight for photosynthesis.', hint: 'Reaching for light.' },
          { id: '5-10', type: 'RECITATION_TABLE', question: 'Why do plants have large broad leaves?', answer: 'Large leaves increase surface area to absorb more sunlight for photosynthesis.', hint: 'Catching rays.' },
          { id: '5-11', type: 'RECITATION_TABLE', question: 'How do needle-like leaves help desert plants survive?', answer: 'Needle-like leaves reduce surface area and reduce water loss through transpiration.', hint: 'Saving water in heat.' },
          { id: '5-12', type: 'RECITATION_TABLE', question: 'How does thick fur or feathers help animals survive cold environments?', answer: 'Thick fur or feathers trap air which is a poor conductor of heat, reducing heat loss.', hint: 'Staying warm.' },
          { id: '5-13', type: 'RECITATION_TABLE', question: 'How does huddling help animals survive cold conditions?', answer: 'Huddling reduces exposed surface area and reduces heat loss to surroundings.', hint: 'Group warmth.' },
          { id: '5-14', type: 'RECITATION_TABLE', question: 'How does staying in shade or burrowing help desert animals survive?', answer: 'Staying in shade or burrowing reduces exposure to heat and prevents overheating.', hint: 'Staying cool.' },
          { id: '5-15', type: 'RECITATION_TABLE', question: 'Why do some animals produce many eggs?', answer: 'Producing many eggs increases the chances that some offspring survive to adulthood.', hint: 'Safety in numbers.' },
          { id: '5-16', type: 'RECITATION_TABLE', question: 'Why do some animals lay eggs in hidden places?', answer: 'Eggs laid in hidden places are protected from predators and increase survival rate.', hint: 'Secret nests.' },
          { id: '5-17', type: 'RECITATION_TABLE', question: 'Why do some young organisms live in a different habitat from adults?', answer: 'Living in different habitats reduces competition for food between young and adults.', hint: 'Sharing resources.' },
          { id: '5-18', type: 'RECITATION_TABLE', question: 'Why do flowers produce nectar?', answer: 'Nectar attracts animals or insects which help to pollinate the flower.', hint: 'Sweet bribe for pollination.' }
        ]
      },
      {
        id: 'people-env',
        title: 'Chapter 6: People and Environment',
        questions: [
          { id: '6-1', type: 'RECITATION_TABLE', question: 'What is pollution?', answer: 'Pollution is the release of harmful substances into the environment.', hint: 'Making the environment dirty.' },
          { id: '6-2', type: 'RECITATION_TABLE', question: 'What are the main types of pollution?', answer: 'Air, water and land pollution harm living things and the environment.', hint: '3 main areas of dirt.' },
          { id: '6-3', type: 'RECITATION_TABLE', question: 'How does burning fossil fuels cause global warming?', answer: 'Burning fossil fuels releases carbon dioxide which traps heat causing global warming.', hint: 'Greenhouse effect.' },
          { id: '6-4', type: 'RECITATION_TABLE', question: 'How does deforestation cause global warming?', answer: 'Cutting trees reduces carbon dioxide absorption and increases carbon dioxide trapping heat.', hint: 'Less trees, more CO2.' },
          { id: '6-5', type: 'RECITATION_TABLE', question: 'How does deforestation affect organisms?', answer: 'Habitat destroyed so organisms lose shelter and food causing population decrease.', hint: 'Losing homes.' },
          { id: '6-6', type: 'RECITATION_TABLE', question: 'How does deforestation cause soil erosion?', answer: 'Without roots holding soil soil is easily washed away by rain.', hint: 'Washing away land.' },
          { id: '6-7', type: 'RECITATION_TABLE', question: 'How does soil erosion affect plants in water?', answer: 'Soil blocks light so less light for photosynthesis reducing plant growth.', hint: 'Muddy water effect.' },
          { id: '6-8', type: 'RECITATION_TABLE', question: 'How does pollution cause death of aquatic organisms?', answer: 'Pollutants reduce oxygen or block photosynthesis causing organisms to die.', hint: 'Choking the water.' },
          { id: '6-9', type: 'RECITATION_TABLE', question: 'How does global warming affect sea levels?', answer: 'Global warming melts ice caps causing sea level rise and flooding.', hint: 'Melting ice.' },
          { id: '6-10', type: 'RECITATION_TABLE', question: 'How does global warming increase disease spread?', answer: 'Higher temperature causes organisms to reproduce faster so more disease carriers are present.', hint: 'Germs love heat.' },
          { id: '6-11', type: 'RECITATION_TABLE', question: 'How does global warming affect animal reproduction?', answer: 'Higher temperature causes more females to hatch so reproduction decreases.', hint: 'Gender imbalance.' },
          { id: '6-12', type: 'RECITATION_TABLE', question: 'How does haze form?', answer: 'Burning forests releases smoke and particles causing haze.', hint: 'Smoky air.' },
          { id: '6-13', type: 'RECITATION_TABLE', question: 'How does wind affect pollution levels?', answer: 'Wind carries pollutants to other areas increasing pollution levels.', hint: 'Moving the dirt.' },
          { id: '6-14', type: 'RECITATION_TABLE', question: 'How do pesticides harm humans?', answer: 'Pesticides remain on food and cause poisoning when consumed.', hint: 'Chemicals on crops.' },
          { id: '6-15', type: 'RECITATION_TABLE', question: 'Why does baking soda remove more pesticides?', answer: 'Baking soda breaks down pesticide residues allowing more removal.', hint: 'Breakdown booster.' },
          { id: '6-16', type: 'RECITATION_TABLE', question: 'How do trees prevent soil erosion and landslides?', answer: 'Roots hold soil together preventing it from being washed away.', hint: 'Holding the earth.' },
          { id: '6-17', type: 'RECITATION_TABLE', question: 'How does removing grass increase soil erosion?', answer: 'Without roots soil is easily washed into rivers during rain.', hint: 'No cover.' },
          { id: '6-18', type: 'RECITATION_TABLE', question: 'How do renewable energy sources benefit the environment?', answer: 'Renewable energy reduces pollution and does not run out.', hint: 'Cleaner and infinite.' },
          { id: '6-19', type: 'RECITATION_TABLE', question: 'How do solar cars benefit the environment?', answer: 'Solar cars reduce use of fossil fuels and reduce air pollution.', hint: 'Sun-powered driving.' },
          { id: '6-20', type: 'RECITATION_TABLE', question: 'How does wastewater treatment help the environment?', answer: 'It removes pollutants before water is released reducing pollution.', hint: 'Cleaning water.' }
        ]
      },
      {
        id: 'pdf-chapter',
        title: 'Chapter 7: Extra Practice (PDF)',
        questions: [
          { id: 'pdf-1', type: 'RECITATION_TABLE', question: 'What is the most important rule of science?', answer: 'Always be curious and keep asking questions.', hint: 'Stay curious.' },
          { id: 'pdf-2', type: 'MCQS', question: 'How do you conduct a fair test?', options: ['(1) Change all variables', '(2) Change only one variable', '(3) Do not change anything', '(4) Keep testing until you get the desired result'], answer: '(2) Change only one variable', hint: 'Only one thing should be different.' },
          { id: 'pdf-3', type: 'OPEN_ENDED', question: 'Explain how energy is transferred in a food chain.', answer: 'Energy from the Sun is captured by producers, which are then eaten by consumers, transferring energy up the food chain.', hint: 'Producers to consumers.' }
        ]
      }
    ]
  }
];
