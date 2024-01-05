
export const GifItem = ({title,url}) => {
  return (
   
    <div className="card">
        <img src={url} alt="src\helpers\loading-11.gif" />
        <p>{title}</p>
    </div>
    
  )
}
