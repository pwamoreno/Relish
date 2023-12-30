import images from './images';

const fusion = [
  {
    title: 'Thai Basil Pesto Noodles',
    price: '₦2500',
    tags: 'Main Courses',
  },
  {
    title: 'Teriyaki Quinoa Bowl',
    price: '₦3500',
    tags: 'Bowls',
  },
  {
    title: 'Vietnamese Banh Mi Burger',
    price: '₦1200',
    tags: 'Entrees',
  },
  {
    title: 'Sushi Tacos',
    price: '₦1500',
    tags: 'Appetizers',
  },
  {
    title: 'Mochi Ice Cream Tacos',
    price: '₦900',
    tags: 'Desserts',
  },
];

const contemporary = [
  {
    title: 'Miso Glazed Black Cod',
    price: '₦2000',
    tags: 'Main Courses',
  },
  {
    title: "Truffle Infused Risotto",
    price: '₦1600',
    tags: 'Entrees',
  },
  {
    title: 'Smoked Salmon and Avocado Tartare Cones',
    price: '₦1000',
    tags: 'Starters',
  },
  {
    title: 'Deconstructed Matcha Tiramisu',
    price: '₦3100',
    tags: 'Desserts',
  },
  {
    title: 'Cucumber Basil Sorbet',
    price: '₦260',
    tags: 'Palette Cleansers',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Great gourmet meals',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star Chef',
    subtitle: 'Amazing cuisine',
  },
  {
    imgUrl: images.award05,
    title: 'AA Rosettes',
    subtitle: 'Excellence in hospitality',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef of the year',
    subtitle: 'For a year of great culinary achievements',
  },
];

export default { fusion, contemporary, awards };