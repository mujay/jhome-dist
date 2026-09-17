// cm; lighting is a visual design proposal, not a lux calculation.
window.SCENE_DESIGN = {
  ceiling: {height:280, thickness:4, outline:[[-15,-15],[965,-15],[965,665],[817,665],[817,900],[677,900],[677,881],[140,881],[140,432],[-15,432]]},
  stations: [
    {id:'living',name:'客廳',x:760,z:260,heading:35},
    {id:'dining',name:'餐廳',x:700,z:500,heading:270},
    {id:'kitchen',name:'廚房',x:280,z:520,heading:0},
    {id:'bedA',name:'臥室 A',x:178,z:310,heading:35},
    {id:'bedB',name:'臥室 B',x:550,z:255,heading:345},
    {id:'bedC',name:'臥室 C',x:420,z:710,heading:250},
    {id:'storage',name:'儲藏室',x:545,z:780,heading:90},
    {id:'entry',name:'玄關',x:747,z:750,heading:0},
    {id:'bathA',name:'浴室 A',x:100,z:200,heading:0},
    {id:'bathB',name:'浴室 B',x:840,z:550,heading:35},
    {id:'front',name:'前陽台',x:740,z:-60,heading:0},
    {id:'utility',name:'工作陽台',x:70,z:610,heading:180}
  ],
  // Fixture positions [x,z]; light source lies below the mounting surface.
  circuits: [
    {id:'living',name:'客廳',kind:'track',label:'暖白軌道投射燈',color:0xffdfb5,points:[[735,100],[735,220],[735,340]],power:26000},
    {id:'dining',name:'餐廳',kind:'pendant',label:'餐桌吊燈',color:0xffd5a0,points:[[580,544]],power:21000},
    {id:'kitchen',name:'廚房',kind:'downlight',label:'中性白工作照明',color:0xfff0d9,points:[[280,450],[280,580]],power:23000},
    {id:'bedA',name:'臥室 A',kind:'downlight',label:'暖白廣角吸頂燈',color:0xffdfb5,points:[[275,255]],power:35000},
    {id:'bedB',name:'臥室 B',kind:'downlight',label:'暖白廣角吸頂燈',color:0xffdfb5,points:[[520,200]],power:26000},
    {id:'bedC',name:'臥室 C',kind:'downlight',label:'暖白廣角吸頂燈',color:0xffdfb5,points:[[420,750]],power:35000},
    {id:'storage',name:'儲藏室',kind:'downlight',label:'儲藏室吸頂燈',color:0xfff0d9,points:[[550,780]],power:16000},
    {id:'entry',name:'玄關',kind:'downlight',label:'走道投射燈＋櫃內燈帶',color:0xffdfb5,points:[[730,690],[730,820]],power:18000},
    {id:'bathA',name:'浴室 A',kind:'downlight',label:'防潮吸頂燈',color:0xfff0d9,points:[[70,160]],power:22000},
    {id:'bathB',name:'浴室 B',kind:'downlight',label:'防潮吸頂燈',color:0xfff0d9,points:[[880,535]],power:22000},
    {id:'front',name:'前陽台',kind:'wall',label:'戶外壁燈',color:0xffdfb5,points:[[632,-60]],power:13000},
    {id:'utility',name:'工作陽台',kind:'wall',label:'防潮壁燈',color:0xfff0d9,points:[[132,610]],power:16000}
  ]
};
