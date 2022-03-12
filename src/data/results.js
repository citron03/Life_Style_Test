// 모든 사진의 출처는 https://pixabay.com/ 입니다.

import city from './../data/picture/city.jpg';
import forest from './../data/picture/forest.jpg';
import grassland from './../data/picture/grassland.jpg';
import lake from './../data/picture/lake.jpg';
import polar from './../data/picture/polar.jpg';
import Tourist from './../data/picture/Tourist destination.jpg';

const results = (nature, density) => {
    if (nature > 40 && density > 40) {
        return [Tourist, "관광지", 
        `당신은 자연에서 살고 싶지만, 사람들과도 떨어지고 싶어하지 않습니다. 
        그런 당신은 자연에서 살면서도 새로운 사람들을 많이 마주칠 수 있는 환경이 필요합니다.
        그렇다면, 관광지 근처에서 살아보는 것은 어떨까요?`]
    } else if (nature > 40) {
        return [forest, "숲", 
        `새의 지저귐을 들어보세요.
        바람에 스치는 잎사귀의 마찰음도 들어보세요.
        어떠신가요?
        당신이 바라던 그 자연이 있습니다.
        회색의 도시를 벗어나 당신만의 삶을 찾으세요.
        푸르른 숲이 당신을 기다립니다.`]
    } 
     else if (density < -30) {
        return [polar, "극지방", 
        `이 곳은 매우 춥습니다.
        그리고, 아무도 없습니다.
        당신에게는 그것이 필요한 것 같습니다.
        당신을 방해할 사람은 아무도 없습니다.
        물론, 당신에게 관심을 가져줄 사람조차도 말입니다.`]
    } else if (nature < 0 || density > 30) {
        return [city, "도시", 
        `모든 사람이 산이나 바다, 초원의 꿈을 꾸는 것은 아닙니다.
        이 곳에는 모든 물건이 있고, 모든 서비스도 있습니다.
        세상에서 가장 빠르게 변하는 장소이기도 합니다.
        수 많은 사람들이 있기에 당신이 더 이 장소를 좋아할지도 모르겠네요.
        만약 많은 사람이 싫다 하더라도, 당신에게 고요하고 지루한 장소는 맞지 않은 것 같네요.`]
    } else if (nature > 30 || density < 10) {
        return [grassland, "초원", 
        `이 드넓은 초원을 바라보세요.
        당신은 조금 지쳤을 뿐입니다.
        수 많은 사람들에 조금 지쳤다면 잠시 쉬었다 가세요.
        그리고 다시 웃는 얼굴로 사람들을 만나러 가는 건 어떨까요?`]
    } else {
        return [lake, "호수", 
        `이 호수는 아름답습니다.
        이 곳에 사는 사람들은 아침이면 도시로 출근을 떠납니다.
        도시의 치열함과 열정이 지나고, 당신의 보금자리로 돌아오면 당신을 기다리는 호수가 있습니다.
        도시에서의 삶과 이 곳에서의 삶의 균형을 찾으세요.
        당신이라면 그럴 수 있습니다.`]
    }

}

export default results;