import './Bio.css';

const Bio = ({data}) => {
  const { bio } = data

  return (
    <article className='bio-container'>
      {bio}
    </article>
  )
}

export default Bio