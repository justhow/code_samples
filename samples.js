/* Simple JS function rotating a series of images, and associated tabs.  Tabs, when clicked, jump slideshow to that image.  When left alone, slideshow advances sequentially every 7 seconds.  Each slide also changes which tab is highlighted, and links to its own page.  Some slides use an image map with multiple links. */

/* Primary tab definitions */

	function Tabfunction1() 
{
       var mainlink = document.getElementById('RLink1');
	document['Rotating1'].src = '/wp-content/uploads/images/slide-RPP-voices.jpg';
	document['Rotating1'].useMap = '';
	document['TabImg1'].src='/wp-content/uploads/images/tabs/tab-RPP-orange.png';
	document['TabImg2'].src='/wp-content/uploads/images/tabs/tab-Syria-blue.png';
	document['TabImg3'].src='/wp-content/uploads/images/tabs/tab-Drones-blue.png';
	document['TabImg4'].src='/wp-content/uploads/images/tabs/tab-bahrain-blue.png';
	document['TabImg5'].src='/wp-content/uploads/images/tabs/tab-LGBT-blue.png';
	document['TabImg6'].src='/wp-content/uploads/images/tabs/tab-NDAA-blue.png'
	mainlink.href = '/our-work/refugee-protection/';
	Start=1;
	window.clearTimeout('Rotate');
}
 	function Tabfunction2() {
       var mainlink = document.getElementById('RLink1');
	document['Rotating1'].src = '/wp-content/uploads/images/slide-CAH-Syria.png';
	document['Rotating1'].useMap = '';
	document['TabImg1'].src='/wp-content/uploads/images/tabs/tab-RPP-blue.png';
	document['TabImg2'].src='/wp-content/uploads/images/tabs/tab-Syria-orange.png';
	document['TabImg3'].src='/wp-content/uploads/images/tabs/tab-Drones-blue.png';
	document['TabImg4'].src='/wp-content/uploads/images/tabs/tab-bahrain-blue.png';
	document['TabImg5'].src='/wp-content/uploads/images/tabs/tab-LGBT-blue.png';
	document['TabImg6'].src='/wp-content/uploads/images/tabs/tab-NDAA-blue.png'
	mainlink.href = '/our-work/crimes-against-humanity/syria/';
}
    function Tabfunction3() {
       var mainlink = document.getElementById('RLink1');
	document['Rotating1'].src = '/wp-content/uploads/images/slide-LS-drones.jpg';
	document['Rotating1'].useMap = '';
	document['TabImg1'].src='/wp-content/uploads/images/tabs/tab-RPP-blue.png';
	document['TabImg2'].src='/wp-content/uploads/images/tabs/tab-Syria-blue.png';
	document['TabImg3'].src='/wp-content/uploads/images/tabs/tab-Drones-orange.png';
	document['TabImg4'].src='/wp-content/uploads/images/tabs/tab-bahrain-blue.png';
	document['TabImg5'].src='/wp-content/uploads/images/tabs/tab-LGBT-blue.png';
	document['TabImg6'].src='/wp-content/uploads/images/tabs/tab-NDAA-blue.png'
	mainlink.href = '/our-work/law-and-security/drones/';
}
	function Tabfunction4() {

       var mainlink = document.getElementById('RLink1');
	document['Rotating1'].src = '/wp-content/uploads/images/slide-HRD-Bahrain-Exhibit.jpg';
	document['Rotating1'].useMap = '#Map3';
	document['TabImg1'].src='/wp-content/uploads/images/tabs/tab-RPP-blue.png';
	document['TabImg2'].src='/wp-content/uploads/images/tabs/tab-Syria-blue.png';
	document['TabImg3'].src='/wp-content/uploads/images/tabs/tab-Drones-blue.png';
	document['TabImg4'].src='/wp-content/uploads/images/tabs/tab-bahrain-orange.png';
	document['TabImg5'].src='/wp-content/uploads/images/tabs/tab-LGBT-blue.png';
	document['TabImg6'].src='/wp-content/uploads/images/tabs/tab-NDAA-blue.png'
	mainlink.href = '/our-work/human-rights-defenders/bahrain/';
} 
	 function Tabfunction5() {

var mainlink = document.getElementById('RLink1');
	document['Rotating1'].src = '/wp-content/uploads/images/slide-FD-gay-rights.jpg';
	document['Rotating1'].useMap = '';
	document['TabImg1'].src='/wp-content/uploads/images/tabs/tab-RPP-blue.png';
	document['TabImg2'].src='/wp-content/uploads/images/tabs/tab-Syria-blue.png';
	document['TabImg3'].src='/wp-content/uploads/images/tabs/tab-Drones-blue.png';
	document['TabImg4'].src='/wp-content/uploads/images/tabs/tab-bahrain-blue.png';
	document['TabImg5'].src='/wp-content/uploads/images/tabs/tab-LGBT-orange.png';
	document['TabImg6'].src='/wp-content/uploads/images/tabs/tab-NDAA-blue.png'
	mainlink.href = '/our-work/fighting-discrimination/lgbt-persons/';
}
	function Tabfunction6() {
	
      var mainlink = document.getElementById('RLink1');
	document['Rotating1'].src = '/wp-content/uploads/images/slide-LS-military-detention.jpg';
	document['Rotating1'].useMap = '';
	document['TabImg1'].src='/wp-content/uploads/images/tabs/tab-RPP-blue.png';
	document['TabImg2'].src='/wp-content/uploads/images/tabs/tab-Syria-blue.png';
	document['TabImg3'].src='/wp-content/uploads/images/tabs/tab-Drones-blue.png';
	document['TabImg4'].src='/wp-content/uploads/images/tabs/tab-bahrain-blue.png';
	document['TabImg5'].src='/wp-content/uploads/images/tabs/tab-LGBT-blue.png';
	document['TabImg6'].src='/wp-content/uploads/images/tabs/tab-NDAA-orange.png'
	mainlink.href = '/our-work/law-and-security/military-detention/';

/* Defining arrays and initializing the function on the page. */

					var ImageArr1 = new Array("/wp-content/uploads/images/slide-RPP-voices.jpg","/wp-content/uploads/images/slide-CAH-Syria.png","/wp-content/uploads/images/slide-LS-drones.jpg","/wp-content/uploads/images/slide-HRD-Bahrain-Exhibit.jpg","/wp-content/uploads/images/slide-FD-gay-rights.jpg","/wp-content/uploads/images/slide-LS-military-detention.jpg");
					var ImageHolder1 = document.getElementById('Rotating1');
					var LinkArr1 = new Array("/our-work/refugee-protection/refugee-voices/","/our-work/crimes-against-humanity/syria/","/our-work/law-and-security/drones/","/our-work/human-rights-defenders/bahrain/","/our-work/fighting-discrimination/lgbt-persons/","/our-work/law-and-security/military-detention/");
					var LinkHolder1 = document.getElementById('RLink1');
					var BlueTabArr1 = new Array("/wp-content/uploads/images/tabs/tab-RPP-blue.png","/wp-content/uploads/images/tabs/tab-Syria-blue.png","/wp-content/uploads/images/tabs/tab-Drones-blue.png","/wp-content/uploads/images/tabs/tab-bahrain-blue.png","/wp-content/uploads/images/tabs/tab-LGBT-blue.png","/wp-content/uploads/images/tabs/tab-NDAA-blue.png");
					var OrangeTabArr1 = new Array("/wp-content/uploads/images/tabs/tab-RPP-orange.png","/wp-content/uploads/images/tabs/tab-Syria-orange.png","/wp-content/uploads/images/tabs/tab-Drones-orange.png","/wp-content/uploads/images/tabs/tab-bahrain-orange.png","/wp-content/uploads/images/tabs/tab-LGBT-orange.png","/wp-content/uploads/images/tabs/tab-NDAA-orange.png");
					var TabimgHolder1 = document.getElementById('TabImg1');
					var TabimgHolder2 = document.getElementById('TabImg2');
					var TabimgHolder3 = document.getElementById('TabImg3');
					var TabimgHolder4 = document.getElementById('TabImg4');
					var TabimgHolder5 = document.getElementById('TabImg5');
					var TabimgHolder6 = document.getElementById('TabImg6');
					var MapArr1 = new Array("","","#Map3","","","");
  
					function RotateImages(whichHolder,Start)
  					{
  						var a = eval("ImageArr"+whichHolder);
  						var b = eval("ImageHolder"+whichHolder);
  						var c = eval("LinkArr"+whichHolder);
  						var d = eval("LinkHolder"+whichHolder);
  						var e = eval("MapArr"+whichHolder);
  						var f = eval("BlueTabArr"+whichHolder);
  						var g = eval("OrangeTabArr"+whichHolder);
  						if(Start>=a.length)
  							Start=0;
						b.useMap=e[Start];
  						b.src = a[Start];
						d.href = c[Start];
	
						TabimgHolder1.src=f[0];
						TabimgHolder2.src=f[1];
						TabimgHolder3.src=f[2];
						TabimgHolder4.src=f[3];
						TabimgHolder5.src=f[4];
						TabimgHolder6.src=f[5];
	
  						if(Start==0)
							TabimgHolder1.src=g[Start];
  						if(Start==1)
							TabimgHolder2.src=g[Start];
  						if(Start==2)
							TabimgHolder3.src=g[Start];
  						if(Start==3)
							TabimgHolder4.src=g[Start];
  						if(Start==4)
							TabimgHolder5.src=g[Start];
  						if(Start==5)
							TabimgHolder6.src=g[Start];

  						var Rotate = window.setTimeout("RotateImages("+whichHolder+","+(Start+1)+")",7000);
  					}

					RotateImages(1,0);
	}