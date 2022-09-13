date="11-29-1999";
var newDate = new Date(date);

newDate = newDate.toLocaleDateString("en-IN",{
    day:"2-digit",
    month:"long",
    year:"numeric",
});
