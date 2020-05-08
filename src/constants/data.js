import west from 'assets/images/west.jpg';
import zuckerberg from 'assets/images/zuckerberg.jpg';
import kirchner from 'assets/images/kirchner.jpg';
import yousafzai from 'assets/images/yousafzai.png';

const data = {
  rulings: [
    {
      id: '1',
      name: 'Kanye West',
      imageUrl: west,
      startDate: '2020/02/25',
      category: 'Entertainment',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptates magnam excepturi libero ipsum ipsa eligendi voluptate praesentium.',
      thumbsUp: 0,
      thumbsDown: 0,
    },
    {
      id: '2',
      name: 'Mark Zuckerberg',
      imageUrl: zuckerberg,
      startDate: '2020/02/01',
      category: 'Business',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptates magnam excepturi libero ipsum ipsa eligendi voluptate praesentium.',
      thumbsUp: 3,
      thumbsDown: 2,
    },
    {
      id: '3',
      name: 'Cristina Fernández de Kirchner',
      imageUrl: kirchner,
      startDate: '2020/01/30',
      category: 'Politics',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptates magnam excepturi libero ipsum ipsa eligendi voluptate praesentium.',
      thumbsUp: 50,
      thumbsDown: 50,
    },
    {
      id: '4',
      name: 'Malala Yousafzai',
      imageUrl: yousafzai,
      startDate: '2020/01/20',
      category: 'Entertainment',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptates magnam excepturi libero ipsum ipsa eligendi voluptate praesentium.',
      thumbsUp: 20,
      thumbsDown: 60,
    },
  ],
};

export default data;
