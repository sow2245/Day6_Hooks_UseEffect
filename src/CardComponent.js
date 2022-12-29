const CardComponent=(props)=>{
    const teamMembers=props.teamMembers;
    return (
        <div id="card" className="cardClass">
            <img src={teamMembers.img}/>
            <h2>{teamMembers.name}</h2>
            <h3>{teamMembers.company}</h3>
            <h4>{teamMembers.address}</h4>
            <h5>{teamMembers.designation}</h5>
        </div>
    )
};

export default CardComponent;