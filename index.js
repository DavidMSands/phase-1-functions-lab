const distanceFromHqInBlocks = function(street){
    return Math.abs(street - 42)
}

function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, destination){
    return Math.abs((start - destination) * 264)
}

function calculatesFarePrice(start, destination) {
    if (Math.abs((start - destination) *264) <= 400) {
        return 0
    } else if (Math.abs((start - destination) * 264) > 400 && (Math.abs((start - destination) * 264) < 2001)) {
        return (Math.abs((start - destination) * 264) - 400) * 0.02
    } else if (Math.abs((start - destination) * 264) > 2000 && (Math.abs((start - destination) * 264) < 2500)) {
        return 25
    } else {
        return 'cannot travel that far'
    }
        
}
