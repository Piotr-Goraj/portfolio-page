// libs
import React from 'react';

// components
import { FormattedMessage } from 'react-intl';

// UI elements
import profile from '../../imgs/profile.png';

// scss
import './scss/_MainContent.scss';

const MainContent: React.FC = () => {
  return (
    <main className='main-content'>
      <section className='content__iam'>
        <div className='iam__text-area'>
          <div className='text-area__name'>
            <FormattedMessage
              id='im'
              defaultMessage={"I'M"}
            />
            <b>Piotr Goraj</b>
          </div>
          <div>
            <FormattedMessage
              id='im-title'
              defaultMessage={"Master's Student of AWSB & Frontend Developer"}
            />
          </div>
        </div>
        <img
          src={profile}
          alt='profile'
        />
      </section>

      <section
        className='content__about'
        id='content__about'
      >
        <FormattedMessage
          id='content-about'
          defaultMessage={'About'}
        />
      </section>

      <section
        className='content__portfolio'
        id='content__portfolio'
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
        ratione, hic rerum dolor quod neque, optio officiis nesciunt numquam
        suscipit doloribus consequuntur? Nisi pariatur numquam tempora quia
        ipsum? Tempora, sapiente. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Incidunt ratione, hic rerum dolor quod neque, optio
        officiis nesciunt numquam suscipit doloribus consequuntur? Nisi pariatur
        numquam tempora quia ipsum? Tempora, sapiente. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Incidunt ratione, hic rerum dolor
        quod neque, optio officiis nesciunt numquam suscipit doloribus
        consequuntur? Nisi pariatur numquam tempora quia ipsum? Tempora,
        sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Incidunt ratione, hic rerum dolor quod neque, optio officiis nesciunt
        numquam suscipit doloribus consequuntur? Nisi pariatur numquam tempora
        quia ipsum? Tempora, sapiente. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Incidunt ratione, hic rerum dolor quod neque, optio
        officiis nesciunt numquam suscipit doloribus consequuntur? Nisi pariatur
        numquam tempora quia ipsum? Tempora, sapiente. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Incidunt ratione, hic rerum dolor
        quod neque, optio officiis nesciunt numquam suscipit doloribus
        consequuntur? Nisi pariatur numquam tempora quia ipsum? Tempora,
        sapiente.
      </section>
      <section
        className='content__contact'
        id='content__contact'
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
        ratione, hic rerum dolor quod neque, optio officiis nesciunt numquam
        suscipit doloribus consequuntur? Nisi pariatur numquam tempora quia
        ipsum? Tempora, sapiente. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Incidunt ratione, hic rerum dolor quod neque, optio
        officiis nesciunt numquam suscipit doloribus consequuntur? Nisi pariatur
        numquam tempora quia ipsum? Tempora, sapiente. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Incidunt ratione, hic rerum dolor
        quod neque, optio officiis nesciunt numquam suscipit doloribus
        consequuntur? Nisi pariatur numquam tempora quia ipsum? Tempora,
        sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Incidunt ratione, hic rerum dolor quod neque, optio officiis nesciunt
        numquam suscipit doloribus consequuntur? Nisi pariatur numquam tempora
        quia ipsum? Tempora, sapiente. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Incidunt ratione, hic rerum dolor quod neque, optio
        officiis nesciunt numquam suscipit doloribus consequuntur? Nisi pariatur
        numquam tempora quia ipsum? Tempora, sapiente. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Incidunt ratione, hic rerum dolor
        quod neque, optio officiis nesciunt numquam suscipit doloribus
        consequuntur? Nisi pariatur numquam tempora quia ipsum? Tempora,
        sapiente.
      </section>
    </main>
  );
};

export default MainContent;
