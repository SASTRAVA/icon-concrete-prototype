export const services = [
  { id: 'ready-mix-concrete', title: 'Ready-Mix Concrete', short: 'Concrete batched to your project specification and coordinated for delivery.', applications: 'Foundations, slabs, columns, commercial and infrastructure works.', image: 'photo-1541888946425-d81bb19240f5' },
  { id: 'concrete-pumping', title: 'Concrete Pumping', short: 'Discuss pump support when site access or pour height needs planning.', applications: 'Elevated floors, restricted access sites and longer pour distances.', image: 'photo-1504307651254-35680f356dfd' },
  { id: 'commercial-delivery', title: 'Commercial Delivery', short: 'Coordinate supply around commercial site access and planned pour windows.', applications: 'Offices, retail, institutional and commercial construction.', image: 'photo-1486406146926-c627a92ad1ab' },
  { id: 'residential-delivery', title: 'Residential Delivery', short: 'Plan concrete delivery for home foundations, slabs and structural work.', applications: 'Individual homes, housing developments and residential structures.', image: 'photo-1600607687939-ce8a6c25118c' },
  { id: 'transport', title: 'Transport', short: 'Discuss transit mixer access, site approach and delivery timing with the team.', applications: 'Plant-to-site coordination for projects in the Hyderabad service area.', image: 'photo-1519003722824-194d4455a60c' },
  { id: 'concrete-additives', title: 'Concrete Additives', short: 'Enquire about admixtures to suit the project specification and conditions.', applications: 'Mix requirements to be reviewed against your engineer’s specification.', image: 'photo-1581092160562-40aa08e78837' },
];

export const gradeGuide = [
  ['M10', 'PCC & levelling'],
  ['M15', 'Blinding & pathways'],
  ['M20', 'Residential slabs'],
  ['M25', 'Beams & columns'],
  ['M30', 'Structural pours'],
  ['M35', 'Higher-load structures'],
  ['M40', 'Specialist applications'],
];

export const plants = [
  {
    id: 'gandi-maisamma',
    name: 'Gandi Maisamma · Medchal Road',
    shortName: 'Gandi Maisamma–Medchal Road',
    address: 'Survey Nos. 492 and 493, Gandi Maisamma to Medchal Road, Telangana',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent('Survey Nos. 492 and 493, Gandi Maisamma to Medchal Road, Telangana'),
    image: 'photo-1519003722824-194d4455a60c',
  },
  {
    id: 'cbit-khanapur',
    name: 'CBIT Post · Khanapur',
    shortName: 'CBIT Post, Khanapur',
    address: 'CBIT Post, Khanapur, Hyderabad',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent('CBIT Post, Khanapur, Hyderabad'),
    image: 'photo-1487958449943-2429e8be8625',
  },
];

export const partners = ['Trishala', 'Synergy', 'Green Space', 'AGR Construction', 'Riddhi', 'Dream View', 'AGA Infra (My Home Group)', 'Happy Homes Housing'];

export const testimonials = [
  { quote: 'We are happy with the professional and quality conscious approach, including the unparalleled teamwork exhibited by this team.', name: 'Green Space', role: 'Client testimonial' },
  { quote: 'We are happy with the professional and quality conscious approach of the entire RMC team. Special appreciation for the RMC site team for excellent coordination, timely supply and adhering to best site safety practices.', name: 'Happy Homes Housing', role: 'Client testimonial' },
  { quote: 'The Icon Concrete industry is growing due to the superior technical properties over normal concrete, but the potential is still huge.', name: 'AGA Infra (My Home Group)', role: 'Client testimonial' },
];

export const projects = [
  { category: 'Residential', title: 'Residential project', caption: 'Replace with an approved project caption and real photo.', image: 'photo-1600607687939-ce8a6c25118c' },
  { category: 'Commercial', title: 'Commercial project', caption: 'Replace with an approved project caption and real photo.', image: 'photo-1486406146926-c627a92ad1ab' },
  { category: 'Infrastructure', title: 'Infrastructure project', caption: 'Replace with an approved project caption and real photo.', image: 'photo-1541888946425-d81bb19240f5' },
  { category: 'Residential', title: 'Residential pour', caption: 'Replace with an approved project caption and real photo.', image: 'photo-1504307651254-35680f356dfd' },
];

export const photo = (id, width = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
