// Images Pixabay: https://pixabay.com/fr/users/jmexclusives-10518280/

const COURSES = [
  {
    id: '1',
    title: 'Fomation JavaScript Moderne',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/1156837650/fr/photo/javascript-code-langage-informatique-programmation-internet-composants-d%C3%A9diteur-de-texte.webp?s=2048x2048&w=is&k=20&c=wfdgh4V6_I1jLi1MF6ac_5oIxFQmG4yIhDIIxt5khkA=',
    price: 99.99,
    selected: false,
    instructorId: '1'
  }, 
  {
    id: '2',
    title: 'Coder facebook avec React JS',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/1166522199/fr/photo/react-programmation-web-app-bulle-de-discours-papier-et-concept-daffichage-mobile-sur-fond.webp?s=2048x2048&w=is&k=20&c=jbPsRs9IStU4OQywaDk9t3kSJAAayihvby9VOO2fxo0=',
    price: 49.99,
    selected: false,
    instructorId: '1'
  },
  {
    id: '3',
    title: 'Wordpress pour débutants',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/458090181/fr/photo/wordpress.webp?s=2048x2048&w=is&k=20&c=88omQeHgv1xjyPxmgQGKtyhbwJFryFZlB9m-NMZnusM=',
    price: 29.49,
    selected: false,
    instructorId: '1'
  }, 
  {
    id: '4',
    title: 'Maîtiser le logiciel Confluence',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/1467923412/fr/vectoriel/connexion-fibres-de-communication-bleues-vertes.webp?s=2048x2048&w=is&k=20&c=HjOt0bLU2owTAEE9ZShZdEvh5UekFjY_Ov3VpTQe9eI=',
    price: 49.29,
    selected: false,
    instructorId: '1'
  },
  {
    id: '5',
    title: 'Python pour les débutants',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/1284202542/fr/vectoriel/python-de-langage-de-programmation-banni%C3%A8re-conceptuelle-%C3%A9ducation-codant-python-de.webp?s=2048x2048&w=is&k=20&c=ojZ-Xi3E_CpY5uRUTwKD3DMXA50NKgsaJSwR8V0AtYk=',
    price: 199.99,
    selected: false,
    instructorId: '1'
  },
  {
    id: '6',
    title: 'apprendre CSS3 ',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/1250984508/fr/photo/feuille-de-style-css-sur-un-%C3%A9cran-concept-de-programmation.webp?s=2048x2048&w=is&k=20&c=T4w20GXJQFVDL9e4oF73_qiwzZrsBOl-C2Z1wyPPnEE=',
    price: 9.99,
    selected: false,
    instructorId: '1'
  },
  {
    id: '7',
    title: 'Formation PHP Orienté Objets',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/1297752994/fr/photo/inscription-php-sur-ordinateur-portable-et-fond-de-code-apprenez-le-langage-de-programmation.webp?s=2048x2048&w=is&k=20&c=xVhuE3hv9t-a0heecWQ5HI9Q9e8NlajCKtTQkVpJBlw=',
    price: 29.99,
    selected: false,
    instructorId: '1'
  },
  {
    id: '8',
    title: 'Formation SEO de 0 à PRO!',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/1360521208/fr/photo/homme-daffaires-utilisant-un-ordinateur-pour-lanalyse-seo-optimisation-des-moteurs-de.webp?s=2048x2048&w=is&k=20&c=QtN-ik2_UdqSxCud9vu3GGcxv_UNPNNn9wZu2AblM-0=',
    price: 19.49,
    selected: false,
    instructorId: '1'
  },
  {
    id: '9',
    title: 'Formation Microsoft Clarity',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, consequatur dolor sequi provident possimus sed ad qui ipsum similique odio iste molestias praesentium nemo ut facere, consectetur error in voluptate!',
    image: 'https://media.istockphoto.com/id/1316412910/fr/photo/conseil-cible-%C3%A0-lint%C3%A9rieur-de-la-loupe-pour-concentrer-lobjectif-daffaires-sur-le-fond.webp?s=2048x2048&w=is&k=20&c=MvWogM3x3QmRm3tQogB67wBGbV5UJJWa6x_KoBy4jYQ=',
    price: 29.45,
    selected: false,
    instructorId: '1'
  }
];

export default COURSES;