import { listItem } from './list-item';

export const ITEMS: listItem[] = [
  {
    id: 1,
    img: 'https://loremflickr.com/150/150',
    title: 'A List Item',
    subtitle: 'A Subtitle',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed consectetur enim, ut volutpat metus. Etiam in lacus at lacus efficitur finibus. Morbi ut quam at sem sollicitudin ornare vel blandit neque. Nulla facilisi. Proin vitae malesuada tellus. Mauris porttitor malesuada metus ac ultricies. Suspendisse finibus ornare tortor, id rhoncus quam lacinia ut. Aliquam volutpat magna in odio feugiat iaculis. Maecenas feugiat sapien ultricies tortor cursus rhoncus. Sed in nisi dapibus, faucibus tortor quis, ultricies eros. Etiam eget dictum nunc. Aliquam convallis molestie tellus, non porttitor enim. Donec feugiat quam nec aliquet consectetur.',
    date: new Date().toDateString()
  },
  {
    id: 2,
    img: 'https://loremflickr.com/150/150',
    title: 'Another List Item',
    subtitle: 'Lorem ipsum dolor',
    paragraph: 'Sed vulputate finibus enim vel mollis. Proin consequat elit at arcu porttitor elementum. Aenean vitae felis eu odio pulvinar sollicitudin. Nam bibendum pretium sapien vulputate luctus. Fusce ac purus urna. Vestibulum sollicitudin mauris lacus, sit amet pulvinar leo bibendum id. Ut accumsan nunc in ipsum dictum, non tempus urna tristique. Nunc augue metus, vulputate et mattis nec, accumsan eu orci. Duis iaculis metus porta, ornare odio id, sagittis ligula. Praesent ullamcorper enim ac pellentesque scelerisque. Aenean ullamcorper purus mauris, quis fringilla elit vehicula ullamcorper. Proin sit amet efficitur sapien.',
    date: new Date().toDateString()
  },
  {
    id: 3,
    img: 'http://via.placeholder.com/150x150',
    title: 'A List Item',
    subtitle: 'Lorem ipsum dolor sit amet',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis pretium purus. Mauris vel nunc vel nulla eleifend pellentesque. Aenean sollicitudin fermentum semper. Duis in augue diam. Aenean consectetur gravida odio, nec auctor enim semper vel. Mauris tincidunt, odio quis commodo gravida, velit nisi placerat diam, sed bibendum ex felis et ipsum. Nunc quis aliquet turpis, et iaculis lectus. Sed vel magna non nulla lacinia lobortis. In non sodales erat.',
    date: new Date().toDateString()
  },
  {
    id: 4,
    img: 'https://loremflickr.com/150/150',
    title: 'Another List Item',
    subtitle: 'Lorem ipsum dolor sit amet.',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis pretium purus. Mauris vel nunc vel nulla eleifend pellentesque. Aenean sollicitudin fermentum semper. Duis in augue diam.',
    date: new Date().toDateString()
  }
];
