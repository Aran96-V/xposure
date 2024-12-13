


// $(window).scroll(function(){
//     if ($(window).scrollTop() >= 10) {
//       $('header').addClass('header-bg-overlay');

//      }
//      else if ($(window).scrollTop() <= 1){
//         $('header').removeClass('header-bg-overlay');

//      }
//   });


$(document).ready(function(){


  $(".logo img").wrap('<a class="lglink" href="index.html"></a>')

  $("body").append(`
  <div class="float-chat">
  <a  href="https://api.whatsapp.com/send?phone=+9633017550">
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M546.704 91.89C486.526 31.584 406.482-1.582 321.229-1.582 145.609-1.583 2.67 141.368 2.67 317.118c0 56.139 14.705 111.05 42.567 159.297L.001 641.595l168.959-44.34c46.595 25.382 99.013 38.835 152.222 38.835h.13C496.944 636.09 640 493.14 640 317.401c0-85.182-33.166-165.179-93.344-225.463l.047-.047zM321.323 582.315c-47.599 0-94.218-12.827-134.895-36.957l-9.697-5.788-100.265 26.257 26.776-97.726-6.272-10.04C70.312 415.965 56.4 367.244 56.4 317.13c0-146.082 118.832-264.96 265.066-264.96 70.713 0 137.328 27.65 187.302 77.622 49.996 50.127 77.493 116.588 77.493 187.42-.118 146.187-118.95 265.066-264.96 265.066l.024.036zM466.541 383.85c-7.913-4.028-47.115-23.233-54.39-25.89-7.276-2.658-12.58-4.028-17.977 4.027-5.268 7.914-20.587 25.89-25.252 31.265-4.666 5.28-9.284 6.035-17.197 2.008-7.914-4.028-33.674-12.426-64.064-39.568-23.634-21.095-39.662-47.221-44.328-55.134-4.665-7.914-.52-12.308 3.532-16.193 3.661-3.544 7.925-9.284 11.941-13.95 4.028-4.665 5.28-7.925 7.925-13.31 2.658-5.28 1.359-9.946-.637-13.95-2.008-4.015-17.977-43.217-24.485-59.185-6.39-15.603-13.063-13.43-17.965-13.701-4.665-.237-9.945-.237-15.2-.237-5.257 0-13.95 1.996-21.225 9.933-7.276 7.914-27.898 27.26-27.898 66.45 0 39.201 28.512 77.009 32.516 82.407 4.027 5.267 56.162 85.784 136.029 120.238 18.98 8.161 33.803 13.063 45.355 16.854 19.098 6.024 36.425 5.15 50.126 3.13 15.32-2.256 47.115-19.229 53.788-37.831 6.662-18.615 6.662-34.536 4.666-37.831-1.89-3.544-7.158-5.504-15.201-9.58l-.06.048z"/></svg>
  </a>
</div>
  `)
})



$(document).ready(function(){
    // Privacy policy
    $('.privacy').attr('data-toggle', 'modal');
    $('.privacy').attr('data-target', '#privacy_modal');
    $("body").append(`
        <div class="modal fade" id="privacy_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal_box_dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
        <div class="modal_text_container">
        <h1>Privacy Policy for WebGlobal Technology Solution Private Limited</h1>

        <p>At WebGlobal Technology Solution Private Limited, accessible from https://webglobal.in/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by WebGlobal Technology Solution Private Limited and how we use it.</p>
        
        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
        
        
        <h2>Consent</h2>
        
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
        
        <h2>Information we collect</h2>
        
        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
        <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
        <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
        
        <h2>How we use your information</h2>
        
        <p>We use the information we collect in various ways, including to:</p>
        
        <ul>
        <li>Provide, operate, and maintain our website</li>
        <li>Improve, personalize, and expand our website</li>
        <li>Understand and analyze how you use our website</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
        <li>Send you emails</li>
        <li>Find and prevent fraud</li>
        </ul>
        
        <h2>Log Files</h2>
        
        <p>WebGlobal Technology Solution Private Limited follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
        
        
        
        
        <h2>Advertising Partners Privacy Policies</h2>
        
        <P>You may consult this list to find the Privacy Policy for each of the advertising partners of WebGlobal Technology Solution Private Limited.</p>
        
        <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on WebGlobal Technology Solution Private Limited, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
        
        <p>Note that WebGlobal Technology Solution Private Limited has no access to or control over these cookies that are used by third-party advertisers.</p>
        
        <h2>Third Party Privacy Policies</h2>
        
        <p>WebGlobal Technology Solution Private Limited's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
        
        <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>
        
        <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        
        <p>Under the CCPA, among other rights, California consumers have the right to:</p>
        <p>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
        <p>Request that a business delete any personal data about the consumer that a business has collected.</p>
        <p>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
        
        <h2>GDPR Data Protection Rights</h2>
        
        <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
        <p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
        <p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
        <p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
        <p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
        <p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
        <p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
        
        <h2>Children's Information</h2>
        
        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
        
        <p>WebGlobal Technology Solution Private Limited does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
        </div>
        </div>
        <div class="modal-footer">
        </div>
        </div>
        </div>
        </div>
    `);
  
  
    // terms And Condition
    $('.trm').attr('data-toggle', 'modal');
    $('.trm').attr('data-target', '#terms_modal');
    $("body").append(`
        <div class="modal fade" id="terms_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal_box_dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body">
            <div class="modal_text_container">
            <h2><strong>Terms and Conditions</strong></h2>

            <p>Welcome to WebGlobal Technology Solution Private Limited!</p>
            
            <p>These terms and conditions outline the rules and regulations for the use of WebGlobal Technology Solution Private Limited's Website, located at WebGlobal Technology Solution Private Limited.in.</p>
            
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use WebGlobal Technology Solution Private Limited if you do not agree to take all of the terms and conditions stated on this page.</p>
            
            <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
            
            <h3><strong>Cookies</strong></h3>
            
            <p>We employ the use of cookies. By accessing WebGlobal Technology Solution Private Limited, you agreed to use cookies in agreement with the WebGlobal Technology Solution Private Limited's Privacy Policy. </p>
            
            <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
            
            <h3><strong>License</strong></h3>
            
            <p>Unless otherwise stated, WebGlobal Technology Solution Private Limited and/or its licensors own the intellectual property rights for all material on WebGlobal Technology Solution Private Limited. All intellectual property rights are reserved. You may access this from WebGlobal Technology Solution Private Limited for your own personal use subjected to restrictions set in these terms and conditions.</p>
            
            <p>You must not:</p>
            <ul>
                <li>Republish material from WebGlobal Technology Solution Private Limited</li>
                <li>Sell, rent or sub-license material from WebGlobal Technology Solution Private Limited</li>
                <li>Reproduce, duplicate or copy material from WebGlobal Technology Solution Private Limited</li>
                <li>Redistribute content from WebGlobal Technology Solution Private Limited</li>
            </ul>
            
            
            <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. WebGlobal Technology Solution Private Limited does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of WebGlobal Technology Solution Private Limited,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, WebGlobal Technology Solution Private Limited shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
            
            <p>WebGlobal Technology Solution Private Limited reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
            
            <p>You warrant and represent that:</p>
            
            <ul>
                <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
            </ul>
            
            <p>You hereby grant WebGlobal Technology Solution Private Limited a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
            
            <h3><strong>Hyperlinking to our Content</strong></h3>
            
            <p>The following organizations may link to our Website without prior written approval:</p>
            
            <ul>
                <li>Government agencies;</li>
                <li>Search engines;</li>
                <li>News organizations;</li>
                <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
            </ul>
            
            <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>
            
            <p>We may consider and approve other link requests from the following types of organizations:</p>
            
            <ul>
                <li>commonly-known consumer and/or business information sources;</li>
                <li>dot.com community sites;</li>
                <li>associations or other groups representing charities;</li>
                <li>online directory distributors;</li>
                <li>internet portals;</li>
                <li>accounting, law and consulting firms; and</li>
                <li>educational institutions and trade associations.</li>
            </ul>
            
            <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of WebGlobal Technology Solution Private Limited; and (d) the link is in the context of general resource information.</p>
            
            <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>
            
            <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to WebGlobal Technology Solution Private Limited. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>
            
            <p>Approved organizations may hyperlink to our Website as follows:</p>
            
            <ul>
                <li>By use of our corporate name; or</li>
                <li>By use of the uniform resource locator being linked to; or</li>
                <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
            </ul>
            
            <p>No use of WebGlobal Technology Solution Private Limited's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>
            
            <h3><strong>iFrames</strong></h3>
            
            <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
            
            <h3><strong>Content Liability</strong></h3>
            
            <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
            
            <h3><strong>Your Privacy</strong></h3>
            
            <p>Please read Privacy Policy</p>
            
            <h3><strong>Reservation of Rights</strong></h3>
            
            <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
            
            <h3><strong>Removal of links from our website</strong></h3>
            
            <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
            
            <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
            
            <h3><strong>Disclaimer</strong></h3>
            
            <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
            
            <ul>
                <li>limit or exclude our or your liability for death or personal injury;</li>
                <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>
            
            <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
            
            <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
            </div>
        </div>
        <div class="modal-footer">
        </div>
        </div>
        </div>
        </div>
    `);
    
  })


  $(document).ready(function(){
    var height = $("header").innerHeight();
    
    var spanheight = $(".height_b").innerHeight();

     var thisheight = spanheight- height;
    $(".banner_line").css({"height": thisheight});
    $(".drp_nav").css({"top":height});
  })


  // home banner slider

  $(document).ready(function(){
    $(document).ready(function(){
  
      $(".Modern-Slider").slick({
        autoplay:true,
        autoplaySpeed:10000,
        speed:600,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:false,
        dots:true,
        pauseOnDotsHover:true,
        cssEase:'linear',
       // fade:true,
        draggable:false,
        prevArrow:'<button class="PrevArrow"></button>',
        nextArrow:'<button class="NextArrow"></button>', 
      });
      
    })
  })
  


//   rooms and suits slider
$(document).ready(function() {
    //initialize swiper when document ready
   var mySwiper = new Swiper ('.room_and_suite_slider', {
     // Optional parameters
     direction: 'horizontal',
     loop: true,
     navigation: false,
     autoplay:true,
     slidesPerView: 2.5,
     spaceBetween: 20,
     autoplaySpeed:10000,
     speed:600,
     draggable:false,
     allowTouchMove: false,
     breakpoints: {
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      }
    }
   });
});



$(document).ready(function(){
  var widhtmenu = $(".ham").innerWidth();
  $(".ham_line span").css({"width": widhtmenu});

  

  $(".menu").click(function(){
    $("body").toggleClass("bodyfix");
  })

const ham = document.querySelector(".ham");
const menu = document.querySelector('.mobile_nav');
const menubg = document.querySelectorAll('.bg_overlay');
const links = document.querySelectorAll('.nav-mb-wrp');

var widhtmenu = $(".ham").innerWidth();
var tl = gsap.timeline({ paused: true });


tl.to(menu, {
	duration: .40,
  pointerEvents: "all",
	ease: 'expo.out',
})


tl.to(menubg, {
	duration: .45,
  width:"100%",
	ease: 'expo.out',
})


tl.to(links, {
	duration: .45,
  x: 0,
  opacity:1,
	ease: 'expo.out',
})


tl.reverse();
$(".ham, .close_call").click (function() {
  tl.reversed() ? tl.play() : tl.reverse();
});
})


$(document).ready(function(){
  var mbwidht = $(".mb_nav_container").innerWidth();
  $(".mobile_navigation ul").css({"width":mbwidht});

  const servicelinks = document.querySelector('.mobile_navigation');

  
  var tl = gsap.timeline({ paused: true });
  
  
  tl.to(servicelinks, {
    duration: 1,
    x:-mbwidht,
    ease: Power3.easeInOut
  })
  

  
  tl.reverse();
  $(".inner_links, .left_close_arrow").click (function() {
    tl.reversed() ? tl.play() : tl.reverse();
  });

})


$(document).ready(function() {

 var bodyheight = $("body").innerHeight();

 var footerheight = $(".container_footer").innerHeight();
 var currentheight = bodyheight - footerheight;

// alert(bodyheight)
// alert(footerheight)
// alert(currentheight)

if ($(window).scrollTop() >= currentheight) {
  $(".scroll_top_link").addClass("show_top");

}
else if ($(window).scrollTop() <= 1){
  $(".scroll_top_link").removeClass("show_top");
}

});    



$(".ham").click(function(){
  $(".mobile-menu").addClass("showmbmenu")
})


$(".close-items").click(function(){
  $(".mobile-menu").removeClass("showmbmenu")
})