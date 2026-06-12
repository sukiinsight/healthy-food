const mealSets=[
[["월","달걀채소 주먹밥","학교 급식","닭안심 간장구이·현미밥·오이무침","바나나 우유"],["화","단호박 치즈토스트","학교 급식","두부소고기 덮밥·콩나물국","사과·플레인 요거트"],["수","참치채소죽","학교 급식","고등어 카레구이·밥·브로콜리","찐 고구마"],["목","과일 요거트볼","학교 급식","토마토 닭고기 파스타·샐러드","치즈·방울토마토"],["금","두부달걀 샌드위치","학교 급식","소고기 미역국·밥·애호박전","배"],["토","채소 오므라이스","잔치국수·과일","연어구이·감자조림·밥","견과류 또는 치즈"],["일","닭가슴살 채소죽","불고기 꼬마김밥","순한 두부짜글이·밥·김","제철 과일"]],
[["월","소고기 김가루 주먹밥","학교 급식","순한 닭갈비·밥·양배추샐러드","귤·요거트"],["화","바나나 오트 팬케이크","학교 급식","새우달걀볶음밥·맑은국","찐 감자"],["수","두부 유부초밥","학교 급식","돼지고기 채소수육·밥","사과"],["목","고구마 달걀샐러드","학교 급식","버섯불고기·잡곡밥·상추","우유 또는 두유"],["금","참치 토마토 토스트","학교 급식","대구살전·밥·시금치나물","바나나"],["토","닭고기 카레밥","메밀국수·두부구이","소고기 채소전골","과일꼬치"],["일","달걀 떡국","닭안심 샌드위치","들깨미역국·밥·고등어구이","플레인 요거트"]]
];
const recipeBank=[
{name:"알록달록 채소 달걀밥",keys:["달걀","당근","애호박","밥"],time:15,steps:["채소를 잘게 썰어 부드럽게 볶아요.","밥을 넣고 고루 섞은 뒤 간장은 아주 조금만 넣어요.","달걀을 풀어 넣고 완전히 익을 때까지 볶아요."]},
{name:"순한 두부 채소덮밥",keys:["두부","당근","애호박","밥"],time:20,steps:["두부와 채소를 한입 크기로 준비해요.","채소를 볶다가 두부와 물 반 컵을 넣어요.","간장 한 작은술로 간하고 밥 위에 올려요."]},
{name:"포근한 감자 달걀국",keys:["감자","달걀"],time:20,steps:["감자를 얇게 썰어 물에 푹 익혀요.","달걀물을 천천히 둘러 넣어요.","대파가 있다면 조금 넣고 싱겁게 마무리해요."]},
{name:"두부 참치 동그랑땡",keys:["두부","참치","달걀"],time:30,steps:["두부 물기를 빼고 참치와 섞어요.","달걀과 잘게 썬 채소를 넣어 반죽해요.","작게 빚어 속까지 완전히 익혀요."]},
{name:"닭고기 채소죽",keys:["닭","당근","밥"],time:30,steps:["닭고기와 당근을 아주 잘게 썰어요.","냄비에 재료와 밥, 물을 넣고 끓여요.","재료가 부드러워지면 참기름 한두 방울로 마무리해요."]},
{name:"토마토 달걀볶음",keys:["토마토","달걀"],time:15,steps:["토마토를 한입 크기로 썰어요.","달걀을 먼저 부드럽게 익혀 덜어 둬요.","토마토를 볶다가 달걀을 다시 넣고 섞어요."]},
{name:"냉장고 채소 오므라이스",keys:["달걀","밥"],time:25,steps:["있는 채소를 잘게 썰어 밥과 볶아요.","케첩은 소량만 넣고 고루 섞어요.","달걀을 완전히 익혀 볶음밥 위에 덮어요."]}
];
let currentSet=Number(localStorage.getItem("mealSet")||0);
const mealCards=document.querySelector("#mealCards"),shoppingList=document.querySelector("#shoppingList"),toast=document.querySelector("#toast");
function showToast(message){toast.textContent=message;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1800)}
function renderMeals(){
 const meals=mealSets[currentSet%mealSets.length],labels=["아침","점심","저녁","간식"];
 mealCards.innerHTML=meals.map((day,index)=>`<article class="meal-card"><div class="meal-top"><span class="day-badge">${day[0]}요일</span><span class="meal-date">${index<5?"학교 가는 날":"주말"}</span></div>${day.slice(1).map((meal,i)=>`<div class="meal-row"><span class="meal-label">${labels[i]}</span><div><div class="meal-name">${meal}</div><div class="meal-ingredients">맵고 짜지 않게, 아이 양에 맞춰 주세요.</div></div></div>`).join("")}</article>`).join("");
 const items=["달걀","두부","닭안심","소고기","생선","현미·잡곡","감자·고구마","당근","애호박","브로콜리","토마토","제철 과일","우유·요거트"];
 shoppingList.innerHTML=items.map(item=>`<span class="shopping-item">□ ${item}</span>`).join("")
}
document.querySelectorAll(".tab").forEach(tab=>tab.addEventListener("click",()=>{document.querySelectorAll(".tab,.screen").forEach(el=>el.classList.remove("active"));tab.classList.add("active");document.querySelector("#"+tab.dataset.screen).classList.add("active")}));
document.querySelector("#refreshMeals").addEventListener("click",()=>{currentSet=(currentSet+1)%mealSets.length;localStorage.setItem("mealSet",currentSet);renderMeals();showToast("새로운 식단으로 바꿨어요")});
document.querySelector("#copyShopping").addEventListener("click",async()=>{const text=[...document.querySelectorAll(".shopping-item")].map(el=>el.textContent).join("\n");try{await navigator.clipboard.writeText(text);showToast("장보기 목록을 복사했어요")}catch{showToast("목록을 길게 눌러 복사해 주세요")}});
document.querySelector("#recipeForm").addEventListener("submit",event=>{event.preventDefault();const input=document.querySelector("#ingredients").value.trim(),limit=Number(document.querySelector("#timeLimit").value);if(!input)return showToast("재료를 먼저 적어 주세요");const ingredients=input.split(/[,\n\s]+/).filter(Boolean),allergies=(localStorage.getItem("allergies")||"").split(/[,\n\s]+/).filter(Boolean);const scored=recipeBank.map(recipe=>({...recipe,score:recipe.keys.filter(key=>ingredients.some(item=>key.includes(item)||item.includes(key))).length,blocked:allergies.some(a=>recipe.keys.some(key=>key.includes(a)||a.includes(key)))})).filter(recipe=>recipe.time<=limit&&!recipe.blocked).sort((a,b)=>b.score-a.score).slice(0,3);document.querySelector("#recipeResults").innerHTML=scored.map(recipe=>`<article class="recipe-card"><h3>${recipe.name}</h3><div class="recipe-meta">약 ${recipe.time}분 · 가진 재료 ${recipe.score}개 활용</div><ol class="recipe-steps">${recipe.steps.map(step=>`<li>${step}</li>`).join("")}</ol></article>`).join("")});
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