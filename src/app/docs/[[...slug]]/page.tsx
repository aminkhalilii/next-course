
const page = ({params}:{
    params:{
      slug:string[]
    }
}) => {
  return (
    <div>
        {params.slug?.map((slug) =>(
            <h2>{slug}</h2>
        ))}
    </div>
  )
}

export default page