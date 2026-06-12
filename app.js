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
function mealGuide(name){
 const dish=name.split("·")[0];
 if(dish.includes("급식"))return null;
 if(/주먹밥|볶음밥|오므라이스|덮밥|카레밥/.test(dish))return ["밥, 주재료, 잘게 썬 채소",["재료를 잘게 썰어요.","주재료와 채소를 익힌 뒤 밥을 섞어요.","어른 음식보다 싱겁게 간해요."]];
 if(/죽/.test(dish))return ["밥, 주재료, 채소, 물",["재료를 아주 잘게 썰어요.","밥과 물을 넣고 푹 끓여요.","부드럽게 익으면 싱겁게 마무리해요."]];
 if(/국|떡국|전골/.test(dish))return ["주재료, 채소, 물 또는 육수",["재료를 한입 크기로 준비해요.","주재료가 완전히 익을 때까지 끓여요.","국간장이나 소금은 조금만 넣어요."]];
 if(/구이|전|수육|닭갈비|불고기/.test(dish))return ["주재료, 곁들임 채소",["뼈와 가시를 확인해 작게 손질해요.","약한 불에서 속까지 완전히 익혀요.","맵지 않고 싱거운 양념으로 마무리해요."]];
 return ["메뉴에 표시된 주재료",["재료를 깨끗이 손질해요.","아이 한입 크기로 조리해요.","알레르기 재료를 확인하고 싱겁게 간해요."]];
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
 mealCards.innerHTML=meals.map((day,index)=>'<article class="meal-card"><div class="meal-top"><span class="day-badge">'+day[0]+'요일</span><span class="meal-date">'+(index<5?"학교 가는 날":"주말")+"</span></div>"+day.slice(1).map((meal,i)=>{const guide=mealGuide(meal);return '<div class="meal-row"><span class="meal-label">'+labels[i]+'</span><div><div class="meal-name">'+meal+"</div>"+(guide?'<button class="meal-recipe-button" type="button">레시피 보기</button><div class="meal-recipe-detail" hidden><b>준비:</b> '+guide[0]+"<ol>"+guide[1].map(step=>"<li>"+step+"</li>").join("")+"</ol></div>":'<div class="meal-ingredients">학교 식단표를 확인해 주세요.</div>')+"</div></div>"}).join("")+"</article>").join("");
 mealCards.querySelectorAll(".meal-recipe-button").forEach(button=>button.addEventListener("click",()=>{const detail=button.nextElementSibling;detail.hidden=!detail.hidden;button.textContent=detail.hidden?"레시피 보기":"레시피 닫기"}));
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