const Clubs=()=>{
    return(<div style={{backgroundColor:"#F2F2F1",width:"85vw"}} className="mx-auto rounded-xl font-medium" >
    <div  className="grid grid-cols-2 py-2 px-8 ">
    <p className="text-4xl" style={{color:"#F68C1F"}}>STUDENT CLUBS</p>
    <p><a  style={{textDecoration:"none",color:"#1F3368",float:"right"}}>See All</a></p>
    </div>
    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center  p-8">
        <img src="./images/c1.png " alt="club logo" />
        <img src="./images/c2.png " alt="club logo" />
        <img src="./images/c3.png " alt="club logo" />
</div>


    </div>)
}
export default Clubs;