let scrlTop = document.getElementById("scrlTop")
window.onscroll = function () {this.scrollY>=300?scrlTop.classList.add('show'):scrlTop.classList.remove('show')}
scrlTop.onclick=function(){window.scrollTo({top:0})}
let ores = document.getElementById("ores");
let food = document.getElementById("food");
let enchant = document.getElementById("enchant");
let potions = document.getElementById("potions");
oresArray=[{ore:'coal',y:'95',color:'co-dark'},{ore:'copper',y:'45',color:'co-dark'},{ore:'iron',y:'15',color:'co-gray7'},{ore:'lapis',y:'-1',color:'co-dblue'},{ore:'gold',y:'-16',color:'co-yel'},{ore:'redstone',y:'-59',color:'co-red'},{ore:'diamond',y:'-57',color:'co-blue'},{ore:'emerald',y:'236',color:'co-green'},{ore:'debris',y:'15',color:'co-dark'}];
(function(){
    let table='';
    for (let i=0;i<oresArray.length;i++){
        table+=`
            <div class="relative ml-10 mt-25" style="height:200px;width:150px">
                <div style="width:100px;height:100px;left:calc(50% - 50px);background-image:url(images/${oresArray[i].ore}_ore.png)" class="bg-cover absolute index-2"></div>
                <div style="width:130px;height:130px;top:50px;left:calc(50% - 65px);border:2px solid var(--dark);border-radius: 20px" class="bg-light absolute br-5 d-flex justify-center">
                    <p class="absolute bottom--10 fw-6 ${oresArray[i].color}">${oresArray[i].ore}</p>
                    <h1 class="absolute bottom-15">Y = ${oresArray[i].y}</h1>
                </div>
            </div>
        `}
    ores.innerHTML=table})()
let foodArray=[{name:'apple',fill:'4'},{name:'baked_potato',fill:'5'},{name:'beetroot',fill:'1'},{name:'beetroot_soup',fill:'6'},{name:'bread',fill:'5'},{name:'cake',fill:'2'},{name:'carrot',fill:'3'},{name:'chorus_fruit',fill:'4'},{name:'cooked_chicken',fill:'6'},{name:'cooked_cod',fill:'5'},{name:'cooked_mutton',fill:'6'},{name:'cooked_porkchop',fill:'8'},{name:'cooked_rabbit',fill:'5'},{name:'cooked_salmon',fill:'6'},{name:'cookie',fill:'2'},{name:'dried_kelp',fill:'1'},{name:'enchanted_apple',fill:'4'},{name:'golden_apple',fill:'4'},{name:'glow_berries',fill:'2'},{name:'golden_carrot',fill:'6'},{name:'honey_bottle',fill:'6'},{name:'melon',fill:'2'},{name:'mushroom_stew',fill:'6'},{name:'poison_potato',fill:'2'},{name:'potato',fill:'1'},{name:'pufferfish',fill:'1'},{name:'pumpkin_pie',fill:'8'},{name:'rabbit_stew',fill:'10'},{name:'raw_beef',fill:'3'},{name:'raw_chicken',fill:'2'},{name:'raw_cod',fill:'2'},{name:'raw_mutton',fill:'2'},{name:'raw_porkchop',fill:'3'},{name:'raw_rabbit',fill:'3'},{name:'raw_salmon',fill:'2'},{name:'rotten_flesh',fill:'4'},{name:'spider_eye',fill:'2'},{name:'steak',fill:'8'},{name:'suspicious_stew',fill:'6'},{name:'sweet_berries',fill:'2'},{name:'tropical_fish',fill:'1'}];
(function(){
    let table2='';
    for (let i=0;i<foodArray.length;i++){
        table2+=`
            <div class="relative ml-10" style="height:100px;width:200px">
                <div style="width:80px;height:80px;top:calc(50% - 40px);border:2px solid var(--dark);background-image: url(images/${foodArray[i].name}.png);" class="br-50 bg-light bg-cover absolute index-2"></div>
                <div style="height:80px;left:40px;top:calc(50% - 40px);border:2px solid var(--dark);border-radius: 20px;border-top-left-radius: 0px;border-bottom-left-radius: 0px;" class="w-80p bg-light absolute br-5 txt-align-center">
                    <p class="relative left-13 top--10">${foodArray[i].name}</p>
                    <h1 style="top:-15px;left:-15px" class="relative">${foodArray[i].fill}</h1>
                    <div class="bone bg-cover absolute" style="top:35px;left:75px"></div>
                </div>
            </div>
        `}
    food.innerHTML=table2})()
let enchantArray = [
    {name:'aqua affinity',desc:'only for helmet , to increase underwater mining speed',level:'1'}
    ,{name:'bane of arthropods',desc:'for melee combat tools to increase damage and applies slowness IV for arthropods mobs',level:'5'}
    ,{name:'blast protection',desc:'for armors to reduce explosion damage and knockback',level:'4'}
    ,{name:'channeling',desc:'for trident to summon a lightning bolt on the target when hit it during th thunderstorm',level:'1'}
    ,{name:'curse of binding',desc:'bad enchant , item cannot be removed from armor slots',level:'1'}
    ,{name:'curse of vanishing',desc:'also bad enchant , the item disappear on death',level:'1'}
    ,{name:'depth strider',desc:'for foot to increase underwater movement speed',level:'3'}
    ,{name:'efficiency',desc:'for tools to increase its speed as well as the chance for axe to disable shields',level:'5'}
    ,{name:'feather falling',desc:'for foot to reduce fall damage',level:'4'}
    ,{name:'fire aspect',desc:'for melee combat tools to set target on fire',level:'2'}
    ,{name:'fire protection',desc:'for armors to reduce fire damage and burn time muttually exclusive with other protections',level:'4'}
    ,{name:'flame',desc:'for the bow to make arrows shot ignited and deal fire damage to the target',level:'1'}
    ,{name:'fortune',desc:'for tools to increase the amount of block drops',level:'3'}
    ,{name:'frost walker',desc:'for foot to allow player to walk on water by freezing the water under their foot',level:'2'}
    ,{name:'impaling',desc:'for trident to increase damage against mobs in water or rain',level:'5'}
    ,{name:'infinity',desc:'for the bow to get infinity arrows shots',level:'1'}
    ,{name:'knockback',desc:'for melee combat tools to increase knockback',level:'2'}
    ,{name:'looting',desc:'for combat tools to increase mob loot',level:'3'}
    ,{name:'loyalty',desc:'for trident to return after being thrown',level:'1'}
    ,{name:'luck of the sea',desc:'for fishing rod to incrase rate of good loot (enchanting books,etc...)',level:'3'}
    ,{name:'lure',desc:'for fishing rod to decrease time for bites',level:'3'}
    ,{name:'mending',desc:'for any thing to repair the item when take experience',level:'1'}
    ,{name:'multishot',desc:'for cross bow to fire 3 arrows at the same time',level:'1'}
    ,{name:'piercing',desc:'for cross bow , arrows pierce entities, allowing for arrows to pierce through stacks of mobs',level:'4'}
    ,{name:'power',desc:'for bow to increase arrow damage',level:'5'}
    ,{name:'projectile protection',desc:'for armors to reduce damage from projectiles',level:'4'}
    ,{name:'protection',desc:'for armors to reduce generic damage',level:'4'}
    ,{name:'punch',desc:'for bow to increase arrow knockback',level:'2'}
    ,{name:'quick charge',desc:'for cross bow to decrease its charging time',level:'3'}
    ,{name:'resperation',desc:'for helmet , extends underwater breathing time',level:'3'}
    ,{name:'riptide',desc:'for trident to launch player with itself when thrown while in water or rain',level:'3'}
    ,{name:'sharpness',desc:'for melee combat tools to increase its damage',level:'5'}
    ,{name:'silk touch',desc:'for tools , mined blocks drop themselves',level:'1'}
    ,{name:'smite',desc:'for melee combat tools to increase damage to the undead',level:'5'}
    ,{name:'soul speed',desc:'for the foot to increase movement speed on soul sand or soul soil',level:'3'}
    ,{name:'swift sneak',desc:'for leggings to increase sneaking speed',level:'3'}
    ,{name:'thorns',desc:'for armors , taking damage causes the attacker to also take damage',level:'3'}
    ,{name:'unbreaking',desc:'for all items to reduce durability damage',level:'3'}];
(function(){
    let table3='';
    for (let i=0;i<enchantArray.length;i++){
        table3+=`
            <div class="br-20 txt-align-center m-20 fill-purple fill relative" style="width:225px;min-height:175px;border:2px solid var(--dark);">
                <h3 class="co-purple m-0 mt-10 txt-capitalize" style="font-size:25px">${enchantArray[i].name}</h3>
                <p style="width:175px" class="mx-auto index-2">${enchantArray[i].desc}</p>
                <span class="co-gray8 fw-6 index-2">max level is ${enchantArray[i].level}</span>
                <div style="width:50px;height:50px;background-image:url('images/enchanted_book.png')" class="bg-cover absolute bottom-0 right-6 index-1"></div>
            </div>
        `}
    enchant.innerHTML=table3})()
let potionArray = [
    {name:'healing',color:'red',item:'glistering melon',dure:'no duration',desc:'restore health by 4 points (point = half heart)'},
    {name:'fire resistance',color:'orange',item:'magma cream',dure:'3:00',desc:'gives immunity to damage from fire, lava, magma block, etc...'},
    {name:'regeneration',color:'purple',item:'ghast tear',dure:'0:45',desc:'restore health by 1 point (half heart) every 2.5s'},
    {name:'strength',color:'yel',item:'blaze powder',dure:'3:00',desc:"increase player's melee attack by 3"},
    {name:'swiftness',color:'dblue',item:'sugar',dure:'3:00',desc:'increase movement speed, sprinting speed, and jumping length by 20%'},
    {name:'night vision',color:'green',item:'golden carrot',dure:'3:00',desc:'makes everything appear to be at the maximum light level, including underwater areas'},
    {name:'invisibility',color:'gray',item:'fermented spider eye',dure:'3:00',desc:'renders the player invisible, equipped and wielded items are still visible'},
    {name:'water breathing',color:'teal',item:'pufferfish',dure:'3:00',desc:'prevents the oxygen bar from depleting when underwater'},
    {name:'leaping',color:'lime',item:"rabbit's foot",dure:'3:00',desc:'increases jump height by 1/2 block'},
    {name:'slow falling',color:'gray',item:'phantom membrane',dure:'1:30',desc:'causes the player to fall at a slower rate and not take any damage when hitting the ground'},
    {name:'turtle master',color:'green',item:'turtle shell',dure:'0:20',desc:'slows the player by 60% speed and reduce incoming damage by 60%'},
    {name:'poison',color:'green',item:'spider eye',dure:'0:45',desc:'depletes health by 1 point (half heart) every 1.25s'},];
(function(){
    let table4='';
    for (let i=0;i<potionArray.length;i++){
        table4+=`
            <div class="txt-align-center br-20 m-20 bg-light relative index-5 fill fill-${potionArray[i].color}" style="width:200px;min-height:175px;border:2px solid var(--dark)">
                <h3 class="co-${potionArray[i].color} m-0 mt-10 txt-capitalize" style="font-size:24px">${potionArray[i].name}</h3>
                <p style="width:175px" class="mx-auto index-2">${potionArray[i].desc} , its duration is (${potionArray[i].dure})</p>
                <span class="co-gray7 fw-6 index-2 mb-10" style="width:170px">${potionArray[i].item}</span>
            </div>
        `}
    table4+=`<div class="bg-cover absolute top-15 left-15 potion"></div>`;
    potions.innerHTML=table4})()