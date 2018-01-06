import React from 'react';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.location.pathname === '/feed') {
      this.props.fetchAllPhotos();
    }
    // this.props.fetchAllUsers();
  }

  // componentWillReceiveProps(newProps) {
  //   debugger
  //   if (this.props.location.pathname !== newProps.location.pathname) {
  //     this.props.fetchAllPhotos();
  //   }
  // }

  render() {
    const allPhotos = this.props.photos.map( (photo, idx) => {
      return (
          <li key={idx} className='photo-upload'>
            <img src={photo.medium_image_url}></img>
          </li>
      );
    });

    const firstPhotos = allPhotos.slice(0, 3);
    const lastPhotos = allPhotos.slice(3);

    return (
      <div id='feed'>
        <ul className='all-images'>
          {/* <div className='all-images-1'>
            {firstPhotos}
          </div> */}
          {/* <div className='all-images-2'>
            {lastPhotos}
          </div> */}
          {allPhotos}
        </ul>
      </div>
    );
  }
}

export default Feed;
