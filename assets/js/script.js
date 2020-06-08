$(document).ready(function(){
    //.........................MAIN ACCUEIL.................................
    //Lune 1
    $('#moon1, #overMoon1').mouseover(function(){
        $('#contact').transition({ opacity: '1'}, 500);
        $('#contact').stop().transition({ opacity: '1'}, 500);
    });
    $('#moon1, #overMoon1').mouseout(function(){
        $('#contact').transition({ opacity: '0'}, 500);
        $('#contact').stop().transition({ opacity: '0'}, 500);
    });
    //Lune 2
    $('#moon2, #overMoon2').mouseover(function(){
        $('#formation').transition({ opacity: '1'}, 500);
        $('#formation').stop().transition({ opacity: '1'}, 500);
    });
    $('#moon2, #overMoon2').mouseout(function(){
        $('#formation').transition({ opacity: '0'}, 500);
        $('#formation').stop().transition({ opacity: '0'}, 500);
    });
    //Lune 3
    $('#moon3, #overMoon3').mouseover(function(){
        $('#xp').transition({ opacity: '1'}, 500);
        $('#xp').stop().transition({ opacity: '1'}, 500);
    });
    $('#moon3, #overMoon3').mouseout(function(){
        $('#xp').transition({ opacity: '0'}, 500);
        $('#xp').stop().transition({ opacity: '0'}, 500);
    });
    //Lune 4
    $('#moon4, #overMoon4').mouseover(function(){
        $('#skills').transition({ opacity: '1'}, 500);
        $('#skills').stop().transition({ opacity: '1'}, 500);
    });
    $('#moon4, #overMoon4').mouseout(function(){
        $('#skills').transition({ opacity: '0'}, 500);
        $('#skills').stop().transition({ opacity: '0'}, 500);
    });
    //................................ CONTACT......................................
    $('#plusPhone').mouseover(function(){
        $('#plusPhone').transition({ rotate: '45deg' });
        $('#plusPhone').stop().transition({ rotate: '45deg' });
    });
    $('#plusPhone').mouseout(function(){
        $('#plusPhone').transition({ rotate: '180deg' });
        $('#plusPhone').stop().transition({ rotate: '180deg' });
    });
    $('#plusPhone').click(function(){
        $('.phoneNumber').toggle('slow');
    });
    $('#plusMail').mouseover(function(){
        $('#plusMail').transition({ rotate: '45deg' });
        $('#plusMail').stop().transition({ rotate: '45deg' });
    });
    $('#plusMail').mouseout(function(){
        $('#plusMail').transition({ rotate: '180deg' });
        $('#plusMail').stop().transition({ rotate: '180deg' });
    });
    $('#plusMail').click(function(){
        $('.mailAdress').toggle('slow');
    });
    //...................................FORMATIONS......................................
    $('#plusTimelineFormation1').mouseover(function(){
        $('#2020').css('font-weight', 'bold');
        $('#plusTimelineFormation1').transition({ rotate: '45deg' });
        $('#plusTimelineFormation1').stop().transition({ rotate: '45deg' });
    });
    $('#plusTimelineFormation1').mouseout(function(){
        $('#2020').css('font-weight', 'normal');
        $('#plusTimelineFormation1').transition({ rotate: '180deg' });
        $('#plusTimelineFormation1').stop().transition({ rotate: '180deg' });
    });
    $('#plusTimelineFormation1').click(function(){
        $('#text2020').toggle('slow');
    });
    $('#plusTimelineFormation2').mouseover(function(){
        $('#2016').css('font-weight', 'bold');
        $('#plusTimelineFormation2').transition({ rotate: '45deg' });
        $('#plusTimelineFormation2').stop().transition({ rotate: '45deg' });
    });
    $('#plusTimelineFormation2').mouseout(function(){
        $('#2016').css('font-weight', 'normal');
        $('#plusTimelineFormation2').transition({ rotate: '180deg' });
        $('#plusTimelineFormation2').stop().transition({ rotate: '180deg' });
    });
        $('#plusTimelineFormation2').click(function(){
        $('#text2016').toggle('slow');
    });
    $('#plusTimelineFormation3').mouseover(function(){
        $('#2015').css('font-weight', 'bold');
        $('#plusTimelineFormation3').transition({ rotate: '45deg' });
        $('#plusTimelineFormation3').stop().transition({ rotate: '45deg' });
    });
    $('#plusTimelineFormation3').mouseout(function(){
        $('#2015').css('font-weight', 'normal');
        $('#plusTimelineFormation3').transition({ rotate: '180deg' });
        $('#plusTimelineFormation3').stop().transition({ rotate: '180deg' });
    });
    $('#plusTimelineFormation3').click(function(){
        $('#text2015').toggle('slow');
    });
    $('#plusTimelineFormation4').mouseover(function(){
        $('#2012').css('font-weight', 'bold');
        $('#plusTimelineFormation4').transition({ rotate: '45deg' });
        $('#plusTimelineFormation4').stop().transition({ rotate: '45deg' });
    });
    $('#plusTimelineFormation4').mouseout(function(){
        $('#2012').css('font-weight', 'normal');
        $('#plusTimelineFormation4').transition({ rotate: '180deg' });
        $('#plusTimelineFormation4').stop().transition({ rotate: '180deg' });
    });
    $('#plusTimelineFormation4').click(function(){
        $('#text2012').toggle('slow');
    });
     //...................................EXPERIENCES PRO......................................
     $('#plusTimelineXp1').mouseover(function(){
        $('#2020xp').css('font-weight', 'bold');
        $('#plusTimelineXp1').transition({ rotate: '45deg' });
        $('#plusTimelineXp1').stop().transition({ rotate: '45deg' });
    });
    $('#plusTimelineXp1').mouseout(function(){
        $('#2020xp').css('font-weight', 'normal');
        $('#plusTimelineXp1').transition({ rotate: '180deg' });
        $('#plusTimelineXp1').stop().transition({ rotate: '180deg' });
    });
    $('#plusTimelineXp1').click(function(){
        $('#text2020xp').toggle('slow');
    });
    $('#plusTimelineXp2').mouseover(function(){
        $('#2018xp').css('font-weight', 'bold');
        $('#plusTimelineXp2').transition({ rotate: '45deg' });
        $('#plusTimelineXp2').stop().transition({ rotate: '45deg' });
    });
    $('#plusTimelineXp2').mouseout(function(){
        $('#2018xp').css('font-weight', 'normal');
        $('#plusTimelineXp2').transition({ rotate: '180deg' });
        $('#plusTimelineXp2').stop().transition({ rotate: '180deg' });
    });
        $('#plusTimelineXp2').click(function(){
        $('#text2018xp').toggle('slow');
    });
    $('#plusTimelineXp3').mouseover(function(){
        $('#2013xp').css('font-weight', 'bold');
        $('#plusTimelineXp3').transition({ rotate: '45deg' });
        $('#plusTimelineXp3').stop().transition({ rotate: '45deg' });
    });
    $('#plusTimelineXp3').mouseout(function(){
        $('#2013xp').css('font-weight', 'normal');
        $('#plusTimelineXp3').transition({ rotate: '180deg' });
        $('#plusTimelineXp3').stop().transition({ rotate: '180deg' });
    });
    $('#plusTimelineXp3').click(function(){
        $('#text2013xp').toggle('slow');
    });
    $('#plusTimelineXp4').mouseover(function(){
        $('#2013xpbis').css('font-weight', 'bold');
        $('#plusTimelineXp4').transition({ rotate: '45deg' });
        $('#plusTimelineXp4').stop().transition({ rotate: '45deg' });
    });
    $('#plusTimelineXp4').mouseout(function(){
        $('#2013xpbis').css('font-weight', 'normal');
        $('#plusTimelineXp4').transition({ rotate: '180deg' });
        $('#plusTimelineXp4').stop().transition({ rotate: '180deg' });
    });
    $('#plusTimelineXp4').click(function(){
        $('#text2013xpbis').toggle('slow');
    });
    //....................................FOOTER........................................
    //Icones flip
    $('.icon').transition({
        perspective: '100px',
        rotateX: '180deg'
    });
    //Insta icon aggrandissement
    $('.instaIcon').mouseover(function(){
        $('.instaIcon').transition({ scale: 2.2 });
        $('.instaIcon').stop().transition({ scale: 2.2 });
    });
    $('.instaIcon').mouseout(function(){
        $('.instaIcon').transition({ scale: 1.1 });
        $('.instaIcon').stop().transition({ scale: 1.1 });
    });
    //Mail icon aggrandissement
    $('.mailIcon').mouseover(function(){
        $('.mailIcon').transition({ scale: 2.2 });
        $('.mailIcon').stop().transition({ scale: 2.2 });
    });
    $('.mailIcon').mouseout(function(){
        $('.mailIcon').transition({ scale: 1.1 });
        $('.mailIcon').stop().transition({ scale: 1.1 });
    });
    //Linkedin icon aggrandissement
    $('.linkedinIcon').mouseover(function(){
        $('.linkedinIcon').transition({ scale: 2.2 });
        $('.linkedinIcon').stop().transition({ scale: 2.2 });
    });
    $('.linkedinIcon').mouseout(function(){
        $('.linkedinIcon').transition({ scale: 1.1 });
        $('.linkedinIcon').stop().transition({ scale: 1.1 });
    });
    
});