const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function Month({ month }) {
    return (
        <> 
           {monthArr[month]}
        </>
    );
}

export default Month;