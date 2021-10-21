import './Bio.css';

const Bio = ({data}) => {
  const { bio } = data

  return (
    <div className='bio-container'>
      {bio}
    </div>
  )
}

export default Bio