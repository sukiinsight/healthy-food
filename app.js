const mealSets=[
[["월","달걀채소 주먹밥","학교 급식","닭안심 간장구이·현미밥·오이무침","바나나 우유"],["화","단호박 치즈토스트","학교 급식","두부소고기 덮밥·콩나물국","사과·플레인 요거트"],["수","참치채소죽","학교 급식","고등어 카레구이·밥·브로콜리","찐 고구마"],["목","과일 요거트볼","학교 급식","토마토 닭고기 파스타·샐러드","치즈·방울토마토"],["금","두부달걀 샌드위치","학교 급식","소고기 미역국·밥·애호박전","배"],["토","채소 오므라이스","잔치국수·과일","연어구이·감자조림·밥","견과류 또는 치즈"],["일","닭가슴살 채소죽","불고기 꼬마김밥","순한 두부짜글이·밥·김","제철 과일"]],
[["월","소고기 김가루 주먹밥","학교 급식","순한 닭갈비·밥·양배추샐러드","귤·요거트"],["화","바나나 오트 팬케이크","학교 급식","새우달걀볶음밥·맑은국","찐 감자"],["수","두부 유부초밥","학교 급식","돼지고기 채소수육·밥","사과"],["목","고구마 달걀샐러드","학교 급식","버섯불고기·잡곡밥·상추","우유 또는 두유"],["금","참치 토마토 토스트","학교 급식","대구살전·밥·시금치나물","바나나"],["토","닭고기 카레밥","메밀국수·두부구이","소고기 채소전골","과일꼬치"],["일","달걀 떡국","닭안심 샌드위치","들깨미역국·밥·고등어구이","플레인 요거트"]]
];
const recipeBank=[
{name:"채소 달걀볶음밥",keys:["달걀","계란","당근","애호박","호박","양파","밥"],need:["달걀","밥","채소"],time:15,steps:["채소를 잘게 썰어 볶아요.","밥과 간장 반 작은술을 넣어요.","달걀을 넣어 완전히 익혀요."]},
{name:"순한 두부 채소덮밥",keys:["두부","당근","애호박","호박","양파","밥"],need:["두부","밥","채소"],time:20,steps:["두부와 채소를 작게 썰어요.","채소와 두부를 물 반 컵과 익혀요.","싱겁게 간해 밥 위에 올려요."]},
{name:"감자 달걀국",keys:["감자","달걀","계란","대파","양파"],need:["감자","달걀"],time:20,steps:["감자를 얇게 썰어 푹 익혀요.","달걀물을 천천히 둘러요.","대파를 조금 넣고 싱겁게 마무리해요."]},
{name:"두부 참치 동그랑땡",keys:["두부","참치","달걀","계란","당근","양파"],need:["두부","참치","달걀"],time:30,steps:["두부 물기를 빼고 참치와 섞어요.","달걀과 잘게 썬 채소를 넣어요.","작게 빚어 속까지 익혀요."]},
{name:"닭고기 채소죽",keys:["닭","닭고기","닭가슴살","닭안심","당근","밥","양파"],need:["닭고기","밥","채소"],time:30,steps:["닭고기와 채소를 잘게 썰어요.","밥과 물을 넣고 푹 끓여요.","부드러워지면 싱겁게 마무리해요."]},
{name:"토마토 달걀볶음",keys:["토마토","방울토마토","달걀","계란","양파"],need:["토마토","달걀"],time:15,steps:["토마토를 한입 크기로 썰어요.","달걀을 먼저 익혀 덜어 둬요.","토마토를 볶다가 달걀을 다시 섞어요."]},
{name:"소고기 채소볶음밥",keys:["소고기","쇠고기","불고기","당근","양파","애호박","밥"],need:["소고기","밥","채소"],time:20,steps:["소고기와 채소를 잘게 썰어요.","고기를 완전히 익힌 뒤 채소와 밥을 넣어요.","간장 반 작은술로 마무리해요."]},
{name:"참치 감자전",keys:["참치","감자","달걀","계란","양파"],need:["참치","감자"],time:25,steps:["감자를 곱게 갈거나 채 썰어요.","참치와 달걀을 섞어요.","작고 얇게 부쳐 속까지 익혀요."]},
{name:"애호박 두부전",keys:["애호박","호박","두부","달걀","계란"],need:["애호박","두부"],time:20,steps:["애호박과 두부를 잘게 으깨요.","달걀을 넣어 한입 크기로 빚어요.","약한 불에서 앞뒤로 익혀요."]},
{name:"고구마 치즈구이",keys:["고구마","치즈","우유"],need:["고구마","치즈"],time:15,steps:["익힌 고구마를 으깨요.","치즈를 조금 올려 녹여요.","충분히 식혀 한입 크기로 나눠요."]},
{name:"돼지고기 양배추볶음",keys:["돼지고기","돼지","양배추","양파","당근"],need:["돼지고기","양배추"],time:25,steps:["고기와 채소를 작게 썰어요.","고기를 먼저 속까지 익혀요.","채소와 간장 한 작은술을 넣고 볶아요."]},
{name:"연어 감자구이",keys:["연어","감자","브로콜리"],need:["연어","감자"],time:30,steps:["감자를 얇게 썰어 먼저 익혀요.","연어의 가시를 확인하고 완전히 익혀요.","브로콜리가 있다면 곁들여요."]}
];
let currentSet=Number(localStorage.getItem("mealSet")||0);
const mealCards=document.querySelector("#mealCards"),shoppingList=document.querySelector("#shoppingList"),toast=document.querySelector("#toast");
function showToast(message){toast.textContent=message;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1800)}
const detailedMealRecipes={
 "달걀채소 주먹밥":{ingredients:["밥 150g","달걀 1개","당근 15g","애호박 20g","참기름 1/2작은술","간장 1/3작은술"],steps:["당근과 애호박은 0.5cm 이하로 잘게 다져요.","팬을 중약불로 30초 예열하고 채소에 물 1큰술을 넣어 2~3분 볶아요.","달걀을 풀어 넣고 주걱으로 저으며 1~2분간 완전히 익혀요.","불을 끄고 따뜻한 밥, 간장, 참기름을 섞은 뒤 한입 크기로 뭉쳐요."]},
 "단호박 치즈토스트":{ingredients:["식빵 1장","찐 단호박 70g","슬라이스 치즈 1/2장","우유 1큰술"],steps:["단호박은 씨와 껍질을 제거하고 2cm로 썰어 8~10분 쪄요.","익은 단호박에 우유를 넣고 곱게 으깨요.","식빵에 단호박을 펴고 치즈를 올려 팬의 약불에서 뚜껑을 덮고 3~4분 구워요.","치즈가 녹고 빵 밑면이 노릇해지면 식혀서 먹기 좋게 잘라요."]},
 "참치채소죽":{ingredients:["밥 100g","참치 30g","당근 15g","양파 15g","애호박 15g","물 350ml"],steps:["참치는 기름이나 물을 빼고, 채소는 0.5cm로 다져요.","냄비에 물과 채소를 넣어 중불에서 5분 끓여요.","밥과 참치를 넣고 약불로 줄여 8~10분간 눌지 않게 저어요.","밥알과 채소가 부드럽게 퍼지면 불을 끄고 한김 식혀요."]},
 "과일 요거트볼":{ingredients:["플레인 요거트 100g","바나나 1/3개","사과 1/4개","오트밀 1큰술"],steps:["사과는 깨끗이 씻고 씨를 제거한 뒤 1cm 이하로 썰어요.","바나나도 같은 크기로 썰어요.","그릇에 요거트를 담고 과일과 오트밀을 올려 바로 먹어요.","견과류를 넣을 경우 알레르기를 확인하고 아주 잘게 부숴 1작은술만 사용해요."]},
 "두부달걀 샌드위치":{ingredients:["식빵 2장","단단한 두부 50g","달걀 1개","오이 20g","플레인 요거트 1큰술"],steps:["달걀은 끓는 물에 10~12분 삶고 찬물에 식혀 껍질을 벗겨요.","두부는 끓는 물에 1분 데친 뒤 면포나 키친타월로 물기를 제거해요.","달걀과 두부를 으깨 요거트와 섞고, 오이는 얇게 썰어요.","식빵 사이에 재료를 넣고 가장자리를 정리한 뒤 한입 크기로 잘라요."]},
 "채소 오므라이스":{ingredients:["밥 150g","달걀 1개","양파 20g","당근 15g","애호박 20g","닭고기 30g","케첩 1작은술"],steps:["닭고기와 채소를 0.5cm 크기로 잘게 썰어요.","팬에 식용유 1작은술을 두르고 중불에서 닭고기를 3~4분, 속이 하얗게 익을 때까지 볶아요.","채소를 넣어 2분 볶고 밥과 케첩을 넣어 2분 더 볶아 그릇에 담아요.","달걀을 풀어 약불에서 얇게 2분 익히고, 윗면까지 익으면 밥 위에 덮어요."]},
 "닭가슴살 채소죽":{ingredients:["밥 100g","닭가슴살 40g","당근 15g","애호박 15g","양파 15g","물 400ml"],steps:["닭가슴살은 끓는 물에 8~10분 삶아 속까지 익힌 후 잘게 찢어요.","채소는 0.5cm로 다지고 냄비에 물과 함께 5분 끓여요.","밥과 닭고기를 넣고 약불에서 10분간 저으며 끓여요.","모든 재료가 숟가락으로 쉽게 으깨질 정도가 되면 불을 꺼요."]},
 "소고기 김가루 주먹밥":{ingredients:["밥 150g","다진 소고기 40g","당근 15g","김가루 1큰술","간장 1/2작은술","참기름 1/2작은술"],steps:["당근을 잘게 다지고 소고기는 키친타월로 핏물을 닦아요.","팬을 중불로 예열해 소고기를 3분간 덩어리 없이 볶아요.","당근과 물 1큰술을 넣어 2분 더 볶고 간장으로 간해요.","밥, 볶은 재료, 김가루, 참기름을 섞어 한입 크기로 뭉쳐요."]},
 "바나나 오트 팬케이크":{ingredients:["바나나 1/2개","달걀 1개","오트밀가루 3큰술","우유 1큰술"],steps:["바나나를 포크로 곱게 으깨고 달걀, 오트밀가루, 우유와 섞어요.","팬을 약불로 예열하고 식용유를 키친타월로 얇게 발라요.","반죽을 지름 7cm 정도로 올려 2분 굽고, 기포가 올라오면 뒤집어요.","반대쪽도 1~2분 익혀 가운데까지 익었는지 확인해요."]},
 "두부 유부초밥":{ingredients:["밥 100g","두부 60g","유부초밥용 유부 3장","당근 10g","오이 10g"],steps:["두부는 끓는 물에 1분 데친 뒤 물기를 꼭 짜고 으깨요.","당근은 잘게 다져 물 1큰술과 2분 볶고, 오이는 잘게 썰어요.","밥, 두부, 채소를 골고루 섞어요.","유부의 조림액을 가볍게 짠 뒤 속을 80%만 채워요."]},
 "고구마 달걀샐러드":{ingredients:["고구마 100g","달걀 1개","오이 20g","플레인 요거트 1큰술"],steps:["고구마는 2cm로 썰어 찜기에 10~12분 쪄요.","달걀은 끓는 물에 10~12분 완숙으로 삶아요.","오이는 얇게 썰어 물기를 닦고, 고구마와 달걀은 포크로 으깨요.","모든 재료에 요거트를 넣어 골고루 섞어요."]},
 "참치 토마토 토스트":{ingredients:["식빵 1장","참치 30g","토마토 40g","치즈 1/2장"],steps:["참치는 기름을 빼고 토마토는 씨의 물기를 제거해 얇게 썰어요.","식빵에 참치, 토마토, 치즈 순으로 올려요.","팬의 약불에서 뚜껑을 덮고 4~5분 구워 치즈를 녹여요.","밑면이 타지 않았는지 확인하고 충분히 식혀 잘라요."]},
 "달걀 떡국":{ingredients:["떡국떡 80g","달걀 1개","물 또는 저염 육수 350ml","대파 5g","김가루 약간"],steps:["떡은 찬물에 10분 담갔다가 헹궈요.","육수를 중불로 끓이고 떡을 넣어 3~4분, 말랑해질 때까지 끓여요.","달걀을 풀어 천천히 둘러 넣고 1분간 건드리지 않은 뒤 저어요.","대파를 넣어 1분 더 끓이고 김가루를 조금 올려요."]}
};

function mealGuide(name){
 const dish=name.split("·")[0].trim();
 if(dish.includes("급식"))return null;
 if(detailedMealRecipes[dish])return detailedMealRecipes[dish];
 if(/볶음밥|주먹밥|오므라이스|덮밥|카레밥/.test(dish))return {ingredients:["밥 150g","주재료 40g","양파 20g","당근 15g","식용유 1작은술","간장 1/2작은술"],steps:["주재료와 채소를 0.5~1cm로 썰어요.","팬을 중불로 30초 예열하고 기름을 두른 뒤 주재료를 3~4분 완전히 익혀요.","채소를 넣어 2~3분 볶고 밥을 넣어 2분 더 볶아요.","간장으로 싱겁게 간하고 한김 식혀요."]};
 if(/죽/.test(dish))return {ingredients:["밥 100g","주재료 40g","채소 30g","물 350~400ml"],steps:["주재료와 채소를 0.5cm 이하로 잘게 썰어요.","냄비에 물과 주재료를 넣어 중불에서 5분 끓여요.","밥을 넣고 약불에서 8~10분간 눌지 않게 저어요.","재료가 숟가락으로 쉽게 으깨지면 불을 끄고 식혀요."]};
 if(/국|떡국|전골/.test(dish))return {ingredients:["주재료 50g","채소 40g","물 또는 저염 육수 350ml","국간장 1/3작은술"],steps:["주재료와 채소를 한입 크기로 손질해요.","육수가 끓으면 단단한 재료부터 넣어 5분 끓여요.","나머지 재료를 넣고 중약불에서 5~8분, 속까지 익혀요.","국간장을 조금 넣고 짜지 않게 마무리해요."]};
 if(/구이/.test(dish))return {ingredients:["생선 또는 고기 70g","식용유 1/2작은술","곁들임 채소 50g"],steps:["뼈와 가시를 꼼꼼히 제거하고 키친타월로 물기를 닦아요.","팬을 중약불로 예열하고 기름을 얇게 둘러요.","앞면 3~4분, 뒤집어 3분가량 익혀 가운데까지 완전히 익혀요.","채소는 끓는 물에 1~2분 데치거나 팬에 부드럽게 볶아 곁들여요."]};
 if(/전/.test(dish))return {ingredients:["주재료 70g","달걀 1개","부침가루 1큰술","식용유 1작은술"],steps:["주재료를 0.5cm로 썰거나 곱게 다져요.","달걀과 부침가루를 섞어 한입 크기로 빚어요.","팬을 중약불로 예열하고 앞뒤로 각 2~3분 익혀요.","가운데를 잘라 속까지 익었는지 확인해요."]};
 if(/나물|브로콜리|오이무침|샐러드/.test(dish))return {ingredients:["채소 60g","참기름 1/3작은술","깨 약간"],steps:["채소를 흐르는 물에 깨끗이 씻고 먹기 좋게 썰어요.","끓는 물에 단단한 채소는 2분, 잎채소는 30~60초 데쳐요.","찬물에 빠르게 헹군 뒤 물기를 꼭 짜요.","참기름과 깨를 소량 넣어 싱겁게 무쳐요."]};
 return {ingredients:["주재료 60g","채소 40g","밥 또는 빵 1인분"],steps:["재료를 깨끗이 씻고 아이 한입 크기로 썰어요.","고기, 생선, 달걀은 중심까지 완전히 익혀요.","채소는 2~3분 볶거나 1~2분 데쳐 부드럽게 만들어요.","소금과 양념은 최소로 넣고 알레르기 재료를 확인해요."]};
}
function splitIngredients(value){return [...new Set(value.split(/[,，、\/\n]+|\s{2,}/).map(v=>v.trim()).filter(Boolean))]}
function customRecipes(items,limit){const title=items.slice(0,3).join("·");return [
 {name:title+" 한입전",time:20,need:items,matched:items,steps:["재료를 잘게 썰거나 으깨요.","달걀 또는 부침가루 한 숟갈과 섞어요.","작고 얇게 부쳐 속까지 익혀요."]},
 {name:title+" 순한 볶음",time:15,need:items,matched:items,steps:["재료를 한입 크기로 썰어요.","단단한 재료부터 물 한두 숟갈과 볶아요.","간장 반 작은술로 마무리해요."]},
 {name:title+" 포근한 국",time:25,need:items,matched:items,steps:["재료를 작게 썰어 물에 넣어요.","부드러워질 때까지 끓여요.","소금은 아주 조금만 넣어요."]}
].filter(r=>r.time<=limit)}
function renderRecipeResults(){
 const input=document.querySelector("#ingredients").value.trim(),limit=Number(document.querySelector("#timeLimit").value),box=document.querySelector("#recipeResults");
 if(!input){box.innerHTML="";return showToast("재료를 먼저 적어 주세요")}
 const items=splitIngredients(input),allergies=splitIngredients(localStorage.getItem("allergies")||"");
 let recipes=recipeBank.map(r=>{const matched=items.filter(item=>r.keys.some(key=>key.includes(item)||item.includes(key)));return {...r,matched:[...new Set(matched)],score:matched.length}}).filter(r=>r.time<=limit&&r.score>0&&!allergies.some(a=>r.keys.some(k=>k.includes(a)||a.includes(k)))).sort((a,b)=>b.score-a.score||a.time-b.time).slice(0,4);
 if(!recipes.length)recipes=customRecipes(items,limit);
 box.innerHTML='<p class="result-summary"><b>'+items.join(", ")+"</b>로 만들 수 있는 추천이에요.</p>"+recipes.map(r=>'<article class="recipe-card"><h3>'+r.name+'</h3><div class="recipe-meta">약 '+r.time+"분 · 활용 재료: "+r.matched.join(", ")+'</div><div class="recipe-needs">준비: '+r.need.join(", ")+'</div><ol class="recipe-steps">'+r.steps.map(step=>"<li>"+step+"</li>").join("")+"</ol></article>").join("");
}

function renderMeals(){
 const meals=mealSets[currentSet%mealSets.length],labels=["아침","점심","저녁","간식"];
 mealCards.innerHTML=meals.map((day,index)=>'<article class="meal-card"><div class="meal-top"><span class="day-badge">'+day[0]+'요일</span><span class="meal-date">'+(index<5?"학교 가는 날":"주말")+"</span></div>"+day.slice(1).map((meal,i)=>{const guide=mealGuide(meal);return '<div class="meal-row"><span class="meal-label">'+labels[i]+'</span><div><div class="meal-name">'+meal+"</div>"+(guide?'<button class="meal-recipe-button" type="button">상세 레시피 보기</button><div class="meal-recipe-detail" hidden><div class="recipe-serving">초등학생 1인분</div><b>재료와 양</b><ul>'+guide.ingredients.map(item=>"<li>"+item+"</li>").join("")+'</ul><b>조리 순서</b><ol>'+guide.steps.map(step=>"<li>"+step+"</li>").join("")+"</ol></div>":'<div class="meal-ingredients">학교 식단표를 확인해 주세요.</div>')+"</div></div>"}).join("")+"</article>").join("");
 mealCards.querySelectorAll(".meal-recipe-button").forEach(button=>button.addEventListener("click",()=>{const detail=button.nextElementSibling;detail.hidden=!detail.hidden;button.textContent=detail.hidden?"상세 레시피 보기":"레시피 닫기"}));
 const items=["달걀","두부","닭안심","소고기","생선","현미·잡곡","감자·고구마","당근","애호박","브로콜리","토마토","제철 과일","우유·요거트"];
 shoppingList.innerHTML=items.map(item=>'<span class="shopping-item">□ '+item+"</span>").join("")
}
document.querySelectorAll(".tab").forEach(tab=>tab.addEventListener("click",()=>{document.querySelectorAll(".tab,.screen").forEach(el=>el.classList.remove("active"));tab.classList.add("active");document.querySelector("#"+tab.dataset.screen).classList.add("active")}));
document.querySelector("#refreshMeals").addEventListener("click",()=>{currentSet=(currentSet+1)%mealSets.length;localStorage.setItem("mealSet",currentSet);renderMeals();showToast("새로운 식단으로 바꿨어요")});
document.querySelector("#copyShopping").addEventListener("click",async()=>{const text=[...document.querySelectorAll(".shopping-item")].map(el=>el.textContent).join("\n");try{await navigator.clipboard.writeText(text);showToast("장보기 목록을 복사했어요")}catch{showToast("목록을 길게 눌러 복사해 주세요")}});
document.querySelector("#recipeForm").addEventListener("submit",event=>{event.preventDefault();renderRecipeResults()});
document.querySelector("#ingredients").addEventListener("input",()=>{if(document.querySelector("#recipeResults").children.length)renderRecipeResults()});
document.querySelector("#timeLimit").addEventListener("change",()=>{if(document.querySelector("#ingredients").value.trim())renderRecipeResults()});
const profile=JSON.parse(localStorage.getItem("childProfile")||"{}");
if(profile.grade)document.querySelector("#childGrade").value=profile.grade;
document.querySelector("#allergies").value=profile.allergies||"";
document.querySelector("#favorites").value=profile.favorites||"";
document.querySelector("#profileForm").addEventListener("submit",event=>{event.preventDefault();const data={grade:document.querySelector("#childGrade").value,allergies:document.querySelector("#allergies").value,favorites:document.querySelector("#favorites").value};localStorage.setItem("childProfile",JSON.stringify(data));localStorage.setItem("allergies",data.allergies);showToast("아이 정보를 저장했어요")});
let installPrompt;const installButton=document.querySelector("#installButton");
window.addEventListener("beforeinstallprompt",event=>{event.preventDefault();installPrompt=event;installButton.hidden=false});
installButton.addEventListener("click",async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;installButton.hidden=true});
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("service-worker.js"));
renderMeals();