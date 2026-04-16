const MENU = [
  // Combos
  {id:'cb1',cat:'combos',name:'The Bánh Mì Duo',desc:'Any Bánh Mì + Classic Boba or Lemon Ice Tea. Great value combo!',price:599,veg:false,img:'Classic Vietnamese Grilled Chicken Bahn Mi.avif'},
  {id:'cb2',cat:'combos',name:'Healthy Breakfast Combo',desc:'Any Smoothie Bowl + Protein Shake of your choice.',price:649,veg:true,img:'Berry Blast Smoothie Bowl.webp'},

  // Milk Bubble Teas
  {id:'mt1',cat:'milktea',name:'Taro Milk Tea',desc:'Smooth, sweet, and nutty root flavor. Bestseller.',price:329,veg:true,img:'Taro Milk Tea.avif'},
  {id:'mt2',cat:'milktea',name:'Thai Milk Tea',desc:'Creamy, spiced black tea. Bestseller.',price:329,veg:true,img:'Thai Milk Tea.avif'},
  {id:'mt3',cat:'milktea',name:'Japanese Matcha Milk Tea',desc:'Earthy green tea, a Signature Drink. Bestseller.',price:339,veg:true,img:'Japanese Matcha Milk Tea.avif'},
  {id:'mt4',cat:'milktea',name:'Strawberry Milk Tea',desc:'Dessert-inspired creamy berry blend. Bestseller.',price:329,veg:true,img:'Strawberry Milk Tea.avif'},
  {id:'mt5',cat:'milktea',name:'Lychee Rose Milk Bubble Tea',desc:'Floral rose and sweet lychee in milk. Bestseller.',price:309,veg:true,img:'Lychee Rose Milk Bubble Tea.avif'},
  {id:'mt6',cat:'milktea',name:'Tiger Sugar',desc:'Signature caramelized brown sugar flavor.',price:289,veg:true,img:'Tiger Sugar.avif'},
  {id:'mt7',cat:'milktea',name:'Kashmiri Kahwa Milk Tea',desc:'Floral rose and sweet lychee in milk.',price:289,veg:true,img:'Kashmiri Kahwa Milk Tea.avif'},
  {id:'mt8',cat:'milktea',name:'Mango Passionfruit Milk Tea',desc:'Tart passionfruit and sweet mango cream.',price:309,veg:true,img:'Mango Passionfruit Milk Tea.avif'},

  // Water Bubble Tea
  {id:'t1',cat:'tea',name:'Blueberry Ice Tea',desc:'Tangy and sweet berry flavor.',price:279,veg:true,img:'Blueberry Ice Tea.avif'},
  {id:'t2',cat:'tea',name:'Lemon Ice Tea',desc:'Refreshing citrus flavor.',price:249,veg:true,img:'Lemon Ice Tea.avif'},
  {id:'t3',cat:'tea',name:'Lychee Rose Ice Tea',desc:'Delicate floral and fruit blend.',price:269,veg:true,img:'Lychee Rose Ice Tea.avif'},
  {id:'t4',cat:'tea',name:'Mango Ice Tea',desc:'Sweet tropical mango flavor. A true Bestseller.',price:259,veg:true,img:'Mango Ice Tea.avif'},
  {id:'t5',cat:'tea',name:'Strawberry Ice Tea',desc:'Classic sweet berry infusion.',price:259,veg:true,img:'Strawberry Ice Tea.avif'},

  // Coffee
  {id:'cf1',cat:'coffee',name:'Bambae Classic',desc:'The house Signature Coffee blend. Bestseller.',price:309,veg:true,img:'Bambae Classic.avif'},
  {id:'cf2',cat:'coffee',name:'Mocha',desc:'Chocolate-infused coffee classic. Bestseller.',price:299,veg:true,img:'Mocha.avif'},
  {id:'cf3',cat:'coffee',name:'Hazelnut',desc:'Rich coffee with nutty hazelnut syrup.',price:299,veg:true,img:'Hazelnut.avif'},
  {id:'cf4',cat:'coffee',name:'Tiramisu',desc:'Coffee with a hint of cocoa and mascarpone flavor.',price:299,veg:true,img:'Tiramisu.avif'},
  {id:'cf5',cat:'coffee',name:'Caramel',desc:'Sweet and buttery caramel-flavored coffee.',price:299,veg:true,img:'Caramel.avif'},
  {id:'cf6',cat:'coffee',name:'Vietnamese Coffee',desc:'Strong, sweet coffee, a house Signature. Bestseller.',price:309,veg:true,img:'Vietnamese.avif'},

  // Banh Mi
  {id:'b1',cat:'banhmi',name:'Chicken Ham & Cheese Bánh Mì',desc:'Simple, classic ham and cheese in a crispy baguette.',price:365,veg:false,img:'Chicken Ham & Cheese Bahn Mi.avif'},
  {id:'b2',cat:'banhmi',name:'Classic Vietnamese Grilled Chicken Bánh Mì',desc:'Marinated, grilled chicken in classic Vietnamese style.',price:385,veg:false,img:'Classic Vietnamese Grilled Chicken Bahn Mi.avif'},
  {id:'b3',cat:'banhmi',name:'Korean BBQ Chicken Bánh Mì',desc:'Chicken in sweet and savory Korean BBQ sauce.',price:395,veg:false,img:'Korean Barbeque Chicken Bahn Mi.avif'},
  {id:'b4',cat:'banhmi',name:'Spicy Cottage Cheese Bánh Mì',desc:'Cottage cheese with a fiery kick.',price:365,veg:true,img:'Spicy Cottage Cheese Bahn Mi.avif'},
  {id:'b5',cat:'banhmi',name:'Vietnamese Egg & Cheese Bánh Mì',desc:'Eggs and cheese with Vietnamese flavors.',price:385,veg:false,img:'Vietnamese Egg & Cheese Bahn Mi.avif'},
  {id:'b6',cat:'banhmi',name:'Exotic Pesto Grilled Veg Bánh Mì',desc:'Grilled vegetables tossed in aromatic pesto.',price:325,veg:true,img:'Exotic Pesto Grilled Veg Bahn Mi.avif'},
  {id:'b7',cat:'banhmi',name:'Smoked Mushroom Bánh Mì',desc:'Savory, smoky mushroom filling.',price:335,veg:true,img:'Smoked Mushroom Bahn Mi.avif'},

  // Toasties
  {id:'to1',cat:'toasties',name:'Barbeque Paneer Toasties',desc:'Indian cottage cheese in smoky BBQ sauce. Bestseller.',price:275,veg:true,img:'Barbeque Paneer Toasties.avif'},
  {id:'to2',cat:'toasties',name:'Classic Cheese & Tomato Toasties',desc:'Simple, comforting melted cheese and tomato.',price:255,veg:true,img:'Classic Cheese & Tomato Toasties.avif'},
  {id:'to3',cat:'toasties',name:'Spinach Corn & Cheese Toasties',desc:'Creamy spinach, corn and melted cheese.',price:245,veg:true,img:'Spinach Corn & Cheese Toasties.avif'},
  {id:'to4',cat:'toasties',name:'Sriracha Egg & Cheese Toasties',desc:'Spicy sriracha-laced egg and cheese blend.',price:295,veg:false,img:'Sriracha Egg & Cheese Toasties.avif'},
  {id:'to5',cat:'toasties',name:'Vietnamese Chicken Toasties',desc:'Savory chicken with Vietnamese spices.',price:285,veg:false,img:'Vietnamese Chicken Toasties.avif'},
  {id:'to6',cat:'toasties',name:'Pesto Mushroom Toasties',desc:'Earthy mushrooms with flavorful pesto.',price:265,veg:true,img:'Pesto Mushroom Toasties.avif'},

  // Protein Shakes
  {id:'ps1',cat:'shakes',name:'Banana Oatmeal Protein Shake',desc:'Wholesome blend of banana and oats.',price:365,veg:true,img:'Banana Oatmeal Protein Shake.avif'},
  {id:'ps2',cat:'shakes',name:'Berry Blast Protein Shake',desc:'Intense mix of assorted berries.',price:355,veg:true,img:'Berry Blast Protein Shake.avif'},
  {id:'ps3',cat:'shakes',name:'Caramel Protein Shake',desc:'Sweet and smooth caramel-flavored shake.',price:315,veg:true,img:'Caramel Protein Shakes.avif'},
  {id:'ps4',cat:'shakes',name:'Chocolate Peanut Butter Shake',desc:'Classic rich blend of chocolate and peanut butter.',price:375,veg:true,img:'Chocolate Peanut Butter Protein Shake.avif'},
  {id:'ps5',cat:'shakes',name:'Coffee Hazelnut Protein Shake',desc:'Nutty hazelnut and robust coffee flavor.',price:345,veg:true,img:'Coffee Hazelnut Protein Shake.avif'},
  {id:'ps6',cat:'shakes',name:'Cookie & Cream Protein Shake',desc:'Creamy shake with cookie pieces.',price:355,veg:true,img:'Cookie & Cream Protein Shake.avif'},
  {id:'ps7',cat:'shakes',name:'Mocha Espresso Protein Shake',desc:'Coffee and chocolate with an espresso kick.',price:325,veg:true,img:'Mocha Espresso Protein Shake.avif'},

  // Smoothie Bowls
  {id:'sb1',cat:'bowls',name:'Banana Peanut Butter Bowl',desc:'Creamy, nutty and banana-rich blend. Signature.',price:360,veg:true,img:'Banana Peanut Butter.avif'},
  {id:'sb2',cat:'bowls',name:'Berry Blast Smoothie Bowl',desc:'Thick frozen blend of mixed berries. Signature.',price:375,veg:true,img:'Berry Blast Smoothie Bowl.webp'},
  {id:'sb3',cat:'bowls',name:'Chocolate Almond Smoothie Bowl',desc:'Rich chocolate and almond flavor base.',price:345,veg:true,img:'Chocolate Almond Smoothie Bowl.avif'},
  {id:'sb4',cat:'bowls',name:'Japanese Matcha Smoothie Bowl',desc:'Earthy matcha base with fresh toppings. Signature.',price:395,veg:true,img:'Japanese Matcha Smoothie Bowl.avif'},
  {id:'sb5',cat:'bowls',name:'Tropical Mango Chia Bowl',desc:'Sweet mango, tropical fruit with chia seeds.',price:350,veg:true,img:'Tropical Mango Chia Smoothie Bowl.avif'},
  {id:'sb6',cat:'bowls',name:'Strawberry Granola Smoothie Bowl',desc:'Sweet strawberry base topped with granola.',price:325,veg:true,img:'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400'},

  // Pancakes
  {id:'p1',cat:'pancakes',name:'Blueberry & Maple Pancake',desc:'Fluffy pancakes with blueberries and maple syrup.',price:248,veg:true,img:'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400'},
  {id:'p2',cat:'pancakes',name:'Caramel Walnut Pancake',desc:'Sticky caramel and crunchy walnut topping. Signature.',price:276,veg:true,img:'Caramel Walnut Pancake.avif'},
  {id:'p3',cat:'pancakes',name:'Honey Matcha Pancake',desc:'Sweet honey and earthy matcha flavor. Signature.',price:299,veg:true,img:'Honey Matcha Pancake.avif'},
  {id:'p4',cat:'pancakes',name:'Lotus Biscoff Pancake',desc:'Caramelized Biscoff spread and crumbs.',price:279,veg:true,img:'Lotus Biscoff Pancake.avif'},
  {id:'p5',cat:'pancakes',name:'Nutella Pancake',desc:'Rich Nutella and chewy brownie pieces.',price:229,veg:true,img:'Nutella Pancake.avif'},
  {id:'p6',cat:'pancakes',name:'Strawberry Cheesecake Pancake',desc:'Creamy cheesecake topping with fresh strawberries.',price:244,veg:true,img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400'}
];

const LB_IMGS = [
  'https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=1200&q=80',
  'https://images.unsplash.com/photo-1514056052883-d017fddd0426?w=1200&q=80',
  'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=1200&q=80',
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200&q=80',
  'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=1200&q=80',
  'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=1200&q=80',
  'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=1200&q=80',
  'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&q=80'
];

let lbIdx = 0;
function lbOpen(i){lbIdx=i;document.getElementById('lb-img').src=LB_IMGS[i];document.getElementById('lb').classList.add('on');document.body.style.overflow='hidden';}
function lbClose(){document.getElementById('lb').classList.remove('on');document.body.style.overflow='';}
function lbMove(d){lbIdx=(lbIdx+d+LB_IMGS.length)%LB_IMGS.length;document.getElementById('lb-img').src=LB_IMGS[lbIdx];}
document.addEventListener('keydown',e=>{if(e.key==='Escape')lbClose();if(e.key==='ArrowRight')lbMove(1);if(e.key==='ArrowLeft')lbMove(-1);});

// CART
let cart=[];
function cartToggle(){
  document.getElementById('cartSidebar').classList.toggle('on');
  document.getElementById('cartOverlay').classList.toggle('on');
  document.body.style.overflow=document.getElementById('cartSidebar').classList.contains('on')?'hidden':'';
  cartRender();
}
function addToCart(id){
  const item=MENU.find(m=>m.id===id);
  const ex=cart.find(c=>c.id===id);
  if(ex)ex.qty++;else cart.push({...item,qty:1});
  updateFab();
  const btns=document.querySelectorAll(`[data-add="${id}"]`);
  btns.forEach(btn => {
    btn.textContent='Added ✓';
    btn.classList.add('added-glow');
    setTimeout(()=>{btn.textContent='Add +'; btn.classList.remove('added-glow');},1200);
  });
}
function changeQty(id,d){
  const i=cart.findIndex(c=>c.id===id);
  if(i<0)return;
  cart[i].qty+=d;
  if(cart[i].qty<=0)cart.splice(i,1);
  updateFab();cartRender();
  if(cart.length===0){document.getElementById('cartSidebar').classList.remove('on');document.getElementById('cartOverlay').classList.remove('on');document.body.style.overflow='';}
}
function updateFab(){
  const total=cart.reduce((s,i)=>s+i.qty,0);
  const price=cart.reduce((s,i)=>s+i.price*i.qty,0);
  document.getElementById('cartCount').textContent=total;
  document.getElementById('cartFabTotal').textContent='₹'+price;
  const fab=document.getElementById('cartFab');
  if(total>0)fab.classList.add('show');else fab.classList.remove('show');
}
function cartRender(){
  const el=document.getElementById('cartItems');
  const tot=document.getElementById('cartGrandTotal');
  if(!cart.length){el.innerHTML='<div class="cart-empty">Your cart is empty.<br>Add some delicious items!</div>';tot.textContent='₹0';return;}
  let grand=0,html='';
  cart.forEach(it=>{
    const sub=it.price*it.qty;grand+=sub;
    html+=`<div class="ci">
      <img src="${it.img}" alt="${it.name}" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=100'">
      <div class="ci-info">
        <div class="ci-name">${it.name}</div>
        <div class="ci-price">₹${it.price} × ${it.qty} = ₹${sub}</div>
      </div>
      <div class="ci-ctrl">
        <button class="ci-btn" onclick="changeQty('${it.id}',-1)">−</button>
        <span class="ci-qty">${it.qty}</span>
        <button class="ci-btn" onclick="changeQty('${it.id}',1)">+</button>
      </div>
    </div>`;
  });
  el.innerHTML=html;tot.textContent='₹'+grand;
}
function cartCheckout(){
  if(!cart.length)return;
  const type=document.getElementById('orderType').value;
  const grand=cart.reduce((s,i)=>s+i.price*i.qty,0);
  let msg=`Hello BamBae! 👋✨\n\nI'd like to place an order for *${type}*:\n\n`;
  cart.forEach(it=>msg+=`▫️ ${it.qty}× ${it.name} — ₹${it.price*it.qty}\n`);
  msg+=`\n🧾 *Total: ₹${grand}*\n\nPlease confirm my order. Thank you! 🌿`;
  window.open(`https://wa.me/919501011265?text=${encodeURIComponent(msg)}`,'_blank');
  cart=[];updateFab();cartRender();
  document.getElementById('cartSidebar').classList.remove('on');
  document.getElementById('cartOverlay').classList.remove('on');
  document.body.style.overflow='';
}

// RESERVATION
function resOpen(){document.getElementById('resModal').classList.add('on');document.body.style.overflow='hidden';document.getElementById('rDate').min=new Date().toISOString().split('T')[0];}
function resClose(){document.getElementById('resModal').classList.remove('on');document.body.style.overflow='';}
function resSubmit(){
  const n=document.getElementById('rName').value;
  const d=document.getElementById('rDate').value;
  const t=document.getElementById('rTime').value;
  const g=document.getElementById('rGuests').value;
  const req=document.getElementById('rRequests').value;
  if(!n||!d||!t){alert('Please fill in your name, date and time.');return;}
  let msg=`Hello BamBae! 🌿\n\nTable reservation request:\n\n👤 *Name:* ${n}\n📅 *Date:* ${d}\n🕒 *Time:* ${t}\n👥 *Guests:* ${g}`;
  if(req) msg+=`\n✨ *Special Request:* ${req}`;
  msg+=`\n\nPlease confirm availability. Thank you!`;
  window.open(`https://wa.me/919501011265?text=${encodeURIComponent(msg)}`,'_blank');
  document.getElementById('rName').value='';document.getElementById('rDate').value='';document.getElementById('rTime').value='';document.getElementById('rRequests').value='';
  resClose();
}

// MENU RENDER
let currentFilter = 'all';
let searchQuery = '';

function renderMenu(){
  const g=document.getElementById('menuGrid');if(!g)return;
  let items = currentFilter === 'all' ? MENU : MENU.filter(m => m.cat === currentFilter);
  
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    items = items.filter(m => m.name.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q));
  }

  if(items.length === 0) {
    g.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:48px 0;color:var(--muted);font-size:1.1rem;">No items found matching your search.</div>';
    return;
  }

  g.innerHTML=items.map((it,i)=>`
    <div class="mcard ${it.veg?'veg':'nveg'}" style="animation-delay:${Math.min(i*.04,.4)}s">
      <div class="mcard-img-wrap"><img class="mcard-img" src="${it.img}" alt="${it.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200'"></div>
      <div class="mcard-body">
        <div class="mcard-top">
          <h3 class="mcard-name">${it.name}</h3>
          <span class="mcard-price">₹${it.price}</span>
        </div>
        <p class="mcard-desc">${it.desc}</p>
        <div class="mcard-foot">
          <div style="display:flex;align-items:center;gap:6px;">
            <div class="diet-dot"></div>
            <span style="font-size:.72rem;color:var(--muted);font-weight:500;">${it.veg?'Veg':'Non-Veg'}</span>
          </div>
          <button class="add-btn" data-add="${it.id}" onclick="addToCart('${it.id}')">Add +</button>
        </div>
      </div>
    </div>
  `).join('');
}
renderMenu();

document.getElementById('menuFilters')?.addEventListener('click',e=>{
  if(!e.target.classList.contains('fbtn'))return;
  document.querySelectorAll('.fbtn').forEach(b=>{
    b.classList.remove('on');
  });
  e.target.classList.add('on');
  
  currentFilter = e.target.dataset.f;
  renderMenu();
});

document.getElementById('menuSearch')?.addEventListener('input', e => {
  searchQuery = e.target.value;
  renderMenu();
});

// FAQ TOGGLE
function toggleFaq(el) {
  const item = el.parentElement;
  const ans = item.querySelector('.faq-a');
  const isActive = item.classList.contains('active');
  
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('active');
    i.querySelector('.faq-a').style.maxHeight = null;
  });

  if (!isActive) {
    item.classList.add('active');
    ans.style.maxHeight = ans.scrollHeight + "px";
  }
}

// NAVIGATION
function go(page){
  window.scrollTo({top:0,behavior:'smooth'});
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const t=document.getElementById('page-'+page);
  if(t){t.classList.add('active');}
  document.querySelectorAll('[data-p]').forEach(a=>{
    a.classList.remove('active');
    if(a.dataset.p===page)a.classList.add('active');
  });
  const nav=document.getElementById('navbar');
  if(page!=='home')nav.classList.add('stuck');
  else{nav.classList.remove('stuck');if(window.scrollY<60)nav.classList.remove('stuck');}
  hamClose();
  setTimeout(reveal,120);
}

// HAMBURGER
function hamToggle(){document.getElementById('ham').classList.toggle('on');document.getElementById('mMenu').classList.toggle('open');document.body.style.overflow=document.getElementById('mMenu').classList.contains('open')?'hidden':'';}
function hamClose(){document.getElementById('ham').classList.remove('on');document.getElementById('mMenu').classList.remove('open');document.body.style.overflow='';}

// SCROLL REVEAL
function reveal(){
  const active=document.querySelector('.page.active');
  if(!active)return;
  const els=active.querySelectorAll('.reveal');
  const vh=window.innerHeight;
  els.forEach(el=>{if(el.getBoundingClientRect().top<vh-40)el.classList.add('up');});
}
window.addEventListener('scroll',reveal,{passive:true});

// NAVBAR SCROLL
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('navbar');
  const onHome=document.getElementById('page-home').classList.contains('active');
  if(onHome){if(window.scrollY>60)nav.classList.add('stuck');else nav.classList.remove('stuck');}
},{passive:true});

// TIME GREETING
(function(){
  const h=new Date().getHours();
  document.getElementById('timeGreet').textContent=(h<12?'Good morning':h<17?'Good afternoon':'Good evening')+', Panchkula';
})();

// PRELOADER
window.addEventListener('load',()=>{
  setTimeout(()=>{
    document.getElementById('preloader').classList.add('gone');
    document.getElementById('heroBg').classList.add('loaded');
    reveal();
  },700);
});

// PARALLAX HERO (subtle)
window.addEventListener('scroll',()=>{
  const bg=document.getElementById('heroBg');
  if(bg&&document.getElementById('page-home').classList.contains('active')){
    bg.style.transform=`scale(1) translateY(${window.scrollY*.15}px)`;
  }
},{passive:true});