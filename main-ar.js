let scrlTop = document.getElementById("scrlTop")
window.onscroll = function () {this.scrollY>=300?scrlTop.classList.add('show'):scrlTop.classList.remove('show')}
scrlTop.onclick=function(){window.scrollTo({top:0})}
let ores = document.getElementById("ores");
let food = document.getElementById("food");
let enchant = document.getElementById("enchant");
let potions = document.getElementById("potions");
oresArray=[{ore:'فحم',img:'coal',y:'95',color:'co-dark'},{ore:'نحاس',img:'copper',y:'45',color:'co-dark'},{ore:'حديد',img:'iron',y:'15',color:'co-gray7'},{ore:'لازورد',img:'lapis',y:'-1',color:'co-dblue'},{ore:'ذهب',img:'gold',y:'-16',color:'co-yel'},{ore:'حجر أحمر',img:'redstone',y:'-59',color:'co-red'},{ore:'ألماس',img:'diamond',y:'-57',color:'co-blue'},{ore:'ياقوت',img:'emerald',y:'236',color:'co-green'},{ore:'حطام أثري',img:'debris',y:'15',color:'co-dark'}];
(function(){
    let table='';
    for (let i=0;i<oresArray.length;i++){
        table+=`
            <div class="relative ml-10 mt-25" style="height:200px;width:150px">
                <div style="width:100px;height:100px;left:calc(50% - 50px);background-image:url(images/${oresArray[i].img}_ore.png)" class="bg-cover absolute index-2"></div>
                <div style="width:130px;height:130px;top:50px;left:calc(50% - 65px);border:2px solid var(--dark);border-radius: 20px" class="bg-light absolute br-5 d-flex justify-center">
                    <p class="absolute bottom--10 fw-6 ${oresArray[i].color}">${oresArray[i].ore}</p>
                    <h1 class="absolute bottom-15">Y = ${oresArray[i].y}</h1>
                </div>
            </div>
        `}
    ores.innerHTML=table})()
let foodArray=[
    {name:'apple',fill:'4',ar:'تفاحة'},
    {name:'baked_potato',fill:'5',ar:'بطاطا مطبوخة'},
    {name:'beetroot',fill:'1',ar:'شمندر'},
    {name:'beetroot_soup',fill:'6',ar:'شوربة شمندر'},
    {name:'bread',fill:'5',ar:'خبز'},
    {name:'cake',fill:'2',ar:'قالب كعك'},
    {name:'carrot',fill:'3',ar:'جزرة'},
    {name:'chorus_fruit',fill:'4',ar:'فاكهة التنقل'},
    {name:'cooked_chicken',fill:'6',ar:'دجاجة مطبوخة'},
    {name:'cooked_cod',fill:'5',ar:'سمكة مطبوخة'},
    {name:'cooked_mutton',fill:'6',ar:'لحم خروف مطبوخ'},
    {name:'cooked_porkchop',fill:'8',ar:'لحم خنزير مطبوخ'},
    {name:'cooked_rabbit',fill:'5',ar:'لحم أرنب مطبوخ'},
    {name:'cooked_salmon',fill:'6',ar:'سلمون مطبوخ'},
    {name:'cookie',fill:'2',ar:'كعكة'},
    {name:'dried_kelp',fill:'1',ar:'عشب مجفف'},
    {name:'enchanted_apple',fill:'4',ar:'تفاحة مطورة'},
    {name:'golden_apple',fill:'4',ar:'تفاحة ذهبية'},
    {name:'glow_berries',fill:'2',ar:'توت متوهج'},
    {name:'golden_carrot',fill:'6',ar:'جزرة ذهبية'},
    {name:'honey_bottle',fill:'6',ar:'زجاجة عسل'},
    {name:'melon',fill:'2',ar:'قطعة بطيخ'},
    {name:'mushroom_stew',fill:'6',ar:'حساء فطر'},
    {name:'poison_potato',fill:'2',ar:'بطاطس مسممة'},
    {name:'potato',fill:'1',ar:'بطاطس'},
    {name:'pufferfish',fill:'1',ar:'سمكة منفوخة'},
    {name:'pumpkin_pie',fill:'8',ar:'فطيرة يقطين'},
    {name:'rabbit_stew',fill:'10',ar:'حساء أرنب'},
    {name:'raw_beef',fill:'3',ar:'لحم بقر نيء'},
    {name:'raw_chicken',fill:'2',ar:'دجاج نيء'},
    {name:'raw_cod',fill:'2',ar:'لحم سمك نيء'},
    {name:'raw_mutton',fill:'2',ar:'لحم خروف نيء'},
    {name:'raw_porkchop',fill:'3',ar:'لحم خنزير نيء'},
    {name:'raw_rabbit',fill:'3',ar:'أرنب نيء'},
    {name:'raw_salmon',fill:'2',ar:'سلمون نيء'},
    {name:'rotten_flesh',fill:'4',ar:'لحم زومبي'},
    {name:'spider_eye',fill:'2',ar:'عين عنكبوت'},
    {name:'steak',fill:'8',ar:'لحم بقر مشوي'},
    {name:'suspicious_stew',fill:'6',ar:'حساء غريب'},
    {name:'sweet_berries',fill:'2',ar:'توت حلو'},
    {name:'tropical_fish',fill:'1',ar:'سمكة استوائية'}];
(function(){
    let table2='';
    for (let i=0;i<foodArray.length;i++){
        table2+=`
            <div class="relative mr-10" style="height:100px;width:200px">
                <div style="width:80px;height:80px;top:calc(50% - 40px);border:2px solid var(--dark);background-image: url(images/${foodArray[i].name}.png);" class="br-50 bg-light bg-cover absolute index-2"></div>
                <div style="height:80px;right:40px;top:calc(50% - 40px);border:2px solid var(--dark);border-radius: 0 0 0 20px" class="w-80p bg-light absolute br-5 txt-align-center">
                    <p class="relative right-16 top--10">${foodArray[i].ar}</p>
                    <h1 style="top:-20px;right:-10px" class="relative">${foodArray[i].fill}</h1>
                    <div class="bone bg-cover absolute" style="top:35px;right:75px"></div>
                </div>
            </div>
        `}
    food.innerHTML=table2})()
let enchantArray = [
    {name:'aqua affinity',desc:'فقط للخوذة , لزيادة سرعة الحفر تحت الماء',level:'1'}
    ,{name:'bane of arthropods',desc:'تعطى للسيف لزيادة ضرره و وضع تأثير البطء على الكائنات المفصلية',level:'5'}
    ,{name:'blast protection',desc:'تعطى للدروع لتخفيض ضرر الإنفجارات و الدفع للخلف',level:'4'}
    ,{name:'channeling',desc:'تعطى للرمح لضرب صاعقة بالعدو أثناء العواصف',level:'1'}
    ,{name:'curse of binding',desc:'تطويرة شريرة , تمنعك من خلع الدرع المطور بها بعد ارتدائه',level:'1'}
    ,{name:'curse of vanishing',desc:'تطويرة شريرة تجعل الغرض المطور بها يختفي بعد الموت',level:'1'}
    ,{name:'depth strider',desc:'تعطى للحذاء لزيادة سرعة الحركة تحت الماء',level:'3'}
    ,{name:'efficiency',desc:'تعطى للأدوات لزيادة سرعة حفرها , فضلا عن قدرة الفأس المطور بها على كسر الدرع',level:'5'}
    ,{name:'feather falling',desc:'تعطى للحذاء لتقليل ضرر السقوط',level:'4'}
    ,{name:'fire aspect',desc:'تعطى للسيف لحرق العدو أثناء ضربه',level:'2'}
    ,{name:'fire protection',desc:'تعطى للدروع لتخفيض ضرر النار , لا يمكن دمجها مع تطويرات <bdi>protection</bdi> الأخرى',level:'4'}
    ,{name:'flame',desc:'تعطى للقوس لجعل السهام تشتغل نار',level:'1'}
    ,{name:'fortune',desc:'تعطى للأدوات لزيادة الموارد الناتجة بعد تكسيرها',level:'3'}
    ,{name:'frost walker',desc:'تعطى للحذاء , تجمد الماء تحتك مما يتيح لك المشي فوق الماء',level:'2'}
    ,{name:'impaling',desc:'تعطى للرمح لزيادة ضرره أثناء المطر و تحت الماء',level:'5'}
    ,{name:'infinity',desc:'تعطى للقوس لجعل أسهمك لا نهائية',level:'1'}
    ,{name:'knockback',desc:'تعطى للسيف لزيادة دفع الأعداء للخلف',level:'2'}
    ,{name:'looting',desc:'تعطى للسيف لزيادة الموارد من الكائنات بعد قتلها',level:'3'}
    ,{name:'loyalty',desc:'تعطى للرمح لجعله يعود بعد رميه',level:'1'}
    ,{name:'luck of the sea',desc:'تعطى للصنارة لزيادة حظك في الصيد',level:'3'}
    ,{name:'lure',desc:'تعطى للصنارة لتقليل مدة الصيد و زيادة سرعته',level:'3'}
    ,{name:'mending',desc:'تعطى لأي شيء ليتم إصلاحه كلما جمعت نقاط خبرة و هو في يدك',level:'1'}
    ,{name:'multishot',desc:'تعطى للقوس الأفقي لجعله يطلق 3 أسهم بنفس االوقت',level:'1'}
    ,{name:'piercing',desc:'تعطى للقوس الأفقي لجعل سهامه تخترق الأعداء',level:'4'}
    ,{name:'power',desc:'تعطى للقوس العادي لزيادة ضرره',level:'5'}
    ,{name:'projectile protection',desc:'تعطى للدروع لتقليل الضرر الناتج عن المقذوفات و الأسهم',level:'4'}
    ,{name:'protection',desc:'تعطى للدروع لتقليل الضرر الناتج بشكل عام',level:'4'}
    ,{name:'punch',desc:'تعطى للقوس لزيادة دفعه للخلف',level:'2'}
    ,{name:'quick charge',desc:'تعطى للقوس الأفقي لتقليل وقت إعادة شحنه',level:'3'}
    ,{name:'resperation',desc:'تعطى للخوذة لزيادة وقت التنفس تحت الماء',level:'3'}
    ,{name:'riptide',desc:'تعطى للرمح لجعله يسحب اللاعب خلفه حين إطلاقه',level:'3'}
    ,{name:'sharpness',desc:'تعطى للسيف لزيادة ضرره',level:'5'}
    ,{name:'silk touch',desc:'تعطى للأدوات لجعلك تأخذ البلوكة كما هي عند حفرها',level:'1'}
    ,{name:'smite',desc:'تعطى للسيف لزيادة ضرره تجاه الغير موتى',level:'5'}
    ,{name:'soul speed',desc:'تعطى للحذاء لزيادة سرعة التحرك فوق الرمال',level:'3'}
    ,{name:'swift sneak',desc:'تعطى للبنطال لزيادة سرعة المشي أثناء الانخفاض',level:'3'}
    ,{name:'thorns',desc:'تعطى للدروع لجعل الضرر الذي يعطيك إياه الخصم يعود إليه أيضا',level:'3'}
    ,{name:'unbreaking',desc:'تعطى لجميع الأدوات لتقليل مدة انكسارها',level:'3'}];
(function(){
    let table3='';
    for (let i=0;i<enchantArray.length;i++){
        table3+=`
            <div class="br-20 txt-align-center m-20 fill-purple fill relative" style="width:225px;min-height:175px;border:2px solid var(--dark);">
                <h3 class="co-purple m-0 mt-10 txt-capitalize" style="font-size:25px">${enchantArray[i].name}</h3>
                <p style="width:175px" class="mx-auto index-2">${enchantArray[i].desc}</p>
                <span class="co-gray8 fw-6 index-2">المستوى الأقصى ${enchantArray[i].level}</span>
                <div style="width:50px;height:50px;background-image:url('images/enchanted_book.png')" class="bg-cover absolute bottom-0 left-0 index-1"></div>
            </div>
        `}
    enchant.innerHTML=table3})()
let potionArray = [
    {name:'healing',color:'red',item:'glistering melon',dure:'لا يوجد',desc:'تستعيد 4 نقاط صحة (نقطة الصحة = نصف قلب)'},
    {name:'fire resistance',color:'orange',item:'magma cream',dure:'3:00',desc:'تعطي مناعة ضد ضرر النار و الحمم و غيرها'},
    {name:'regeneration',color:'purple',item:'ghast tear',dure:'0:45',desc:'تجعلك تستعيد نقطة صحة كل 2.5 ثانية'},
    {name:'strength',color:'yel',item:'blaze powder',dure:'3:00',desc:"تزيد ضرر السيف ب 3 نقاط"},
    {name:'swiftness',color:'dblue',item:'sugar',dure:'3:00',desc:'تزيد سرعة المشي و الركض و طول القفزة ب20%'},
    {name:'night vision',color:'green',item:'golden carrot',dure:'3:00',desc:'تجعلك ترى كل شيء بوضوح في الظلام'},
    {name:'invisibility',color:'gray',item:'fermented spider eye',dure:'3:00',desc:'تجعل اللاعب يختفي و لكن الغرض الذي في يده سيبقى ظاهر'},
    {name:'water breathing',color:'teal',item:'pufferfish',dure:'3:00',desc:'تمنع نقصان الهواء تحت الماء'},
    {name:'leaping',color:'lime',item:"rabbit's foot",dure:'3:00',desc:'تزيد طول القفزة بنصف بلوكة'},
    {name:'slow falling',color:'gray',item:'phantom membrane',dure:'1:30',desc:'تجعل اللاعب يسقط بهدوء و دون أخذ ضرر من السقوط'},
    {name:'turtle master',color:'green',item:'turtle shell',dure:'0:20',desc:'تبطئ اللاعب بمقدار 60% و تقلل الضرر الذي يأخذه بمقدار 60%'},
    {name:'poison',color:'green',item:'spider eye',dure:'0:45',desc:'تنقص منك نقطة صحة كل ثانية و ربع'},
];
(function(){
    let table4='';
    for (let i=0;i<potionArray.length;i++){
        table4+=`
            <div class="txt-align-center br-20 m-20 bg-light relative index-5 fill fill-${potionArray[i].color}" style="width:200px;min-height:175px;border:2px solid var(--dark)">
                <h3 class="co-${potionArray[i].color} m-0 mt-10 txt-capitalize" style="font-size:24px">${potionArray[i].name}</h3>
                <p style="width:175px" class="mx-auto index-2">${potionArray[i].desc} , مدته  (${potionArray[i].dure})</p>
                <span class="co-gray7 fw-6 index-2 mb-10" style="width:170px">${potionArray[i].item}</span>
            </div>
        `}
    table4+=`<div class="bg-cover absolute top-15 left-15 potion"></div>`;
    potions.innerHTML=table4})()