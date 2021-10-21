import './Bio.css';

const Bio = ({data}) => {
  const { bio } = data

  return (
    <div>
      {bio}
    </div>
  )
}

export default Bio