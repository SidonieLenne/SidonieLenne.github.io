$(document).ready(function(){
    //.........................MAIN ACCUEIL.................................
    //Lune 1
    $('#moon1, #overMoon1').mouseover(function(){
        $('#contact').transition({ opacity: '1'}, 500);
        $('#contact').stop().transition({ opacity: '1'}, 500);
    });
    $('#moon1, #overMoon1').mouseout(function(){
        $('#contact').transition({ opacity: '0.4'}, 500);
        $('#contact').stop().transition({ opacity: '0.4'}, 500);
    });
    //Lune 2
    $('#moon2, #overMoon2').mouseover(function(){
        $('#formation').transition({ opacity: '1'}, 500);
        $('#formation').stop().transition({ opacity: '1'}, 500);
    });
    $('#moon2, #overMoon2').mouseout(function(){
        $('#formation').transition({ opacity: '0.4'}, 500);
        $('#formation').stop().transition({ opacity: '0.4'}, 500);
    });
    //Lune 3
    $('#moon3, #overMoon3').mouseover(function(){
        $('#xp').transition({ opacity: '1'}, 500);
        $('#xp').stop().transition({ opacity: '1'}, 500);
    });
    $('#moon3, #overMoon3').mouseout(function(){
        $('#xp').transition({ opacity: '0.4'}, 500);
        $('#xp').stop().transition({ opacity: '0.4'}, 500);
    });
    //Lune 4
    $('#moon4, #overMoon4').mouseover(function(){
        $('#skills').transition({ opacity: '1'}, 500);
        $('#skills').stop().transition({ opacity: '1'}, 500);
    });
    $('#moon4, #overMoon4').mouseout(function(){
        $('#skills').transition({ opacity: '0.4'}, 500);
        $('#skills').stop().transition({ opacity: '0.4'}, 500);
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
        $('.formation1title').transition({ opacity: '0.8'}, 500);
        $('.formation1title').stop().transition({ opacity: '0.8'}, 500);
        $('#plusTimelineFormation1').transition({ rotate: '180deg' });
        $('#plusTimelineFormation1').stop().transition({ rotate: '180deg' });
        $('#plusTimelineFormation1').attr('src', 'assets/images/petiteclairedroite.png');
        $('#titleTimelineFormation1').css('color', '#fffef1');
        $('.formation1title').css('color', '#fffef1');
    });
    $('#plusTimelineFormation1').mouseout(function(){
        $('.formation1title').transition({ opacity: '0.3'}, 500);
        $('.formation1title').stop().transition({ opacity: '0.3'}, 500);
        $('#plusTimelineFormation1').transition({ rotate: '360deg' });
        $('#plusTimelineFormation1').stop().transition({ rotate: '360deg' });
        $('#plusTimelineFormation1').attr('src', 'assets/images/petitesombredroite.png');
        $('#titleTimelineFormation1').css('color', '#1d0029');
        $('.formation1title').css('color', '#1d0029');
    });
    $('#plusTimelineFormation1').click(function(){
        $('.formation1text').toggle('slow');
    });
    $('#plusTimelineFormation2').mouseover(function(){
        $('.formation2title').transition({ opacity: '0.8'}, 500);
        $('.formation2title').stop().transition({ opacity: '0.8'}, 500);
        $('#plusTimelineFormation2').transition({ rotate: '180deg' });
        $('#plusTimelineFormation2').stop().transition({ rotate: '180deg' });
        $('#plusTimelineFormation2').attr('src', 'assets/images/grandeclairedroite.png');
        $('#titleTimelineFormation2').css('color', '#fffef1');
        $('.formation2title').css('color', '#fffef1');
    });
    $('#plusTimelineFormation2').mouseout(function(){
        $('.formation2title').transition({ opacity: '0.3'}, 500);
        $('.formation2title').stop().transition({ opacity: '0.3'}, 500);
        $('#plusTimelineFormation2').transition({ rotate: '360deg' });
        $('#plusTimelineFormation2').stop().transition({ rotate: '360deg' });
        $('#plusTimelineFormation2').attr('src', 'assets/images/grandesombredroite.png');
        $('#titleTimelineFormation2').css('color', '#1d0029');
        $('.formation2title').css('color', '#1d0029');
    });
        $('#plusTimelineFormation2').click(function(){
            $('.formation2text').toggle('slow');
    });
    $('#plusTimelineFormation3').mouseover(function(){
        $('.formation3title').transition({ opacity: '0.8'}, 500);
        $('.formation3title').stop().transition({ opacity: '0.8'}, 500);
        $('#plusTimelineFormation3').transition({ rotate: '180deg' });
        $('#plusTimelineFormation3').stop().transition({ rotate: '180deg' });
        $('#plusTimelineFormation3').attr('src', 'assets/images/grandeclairegauche.png');
        $('#titleTimelineFormation3').css('color', '#fffef1');
        $('.formation3title').css('color', '#fffef1');
    });
    $('#plusTimelineFormation3').mouseout(function(){
        $('.formation3title').transition({ opacity: '0.3'}, 500);
        $('.formation3title').stop().transition({ opacity: '0.3'}, 500);
        $('#plusTimelineFormation3').transition({ rotate: '360deg' });
        $('#plusTimelineFormation3').stop().transition({ rotate: '360deg' });
        $('#plusTimelineFormation3').attr('src', 'assets/images/grandesombregauche.png');
        $('#titleTimelineFormation3').css('color', '#1d0029');
        $('.formation3title').css('color', '#1d0029');
    });
    $('#plusTimelineFormation3').click(function(){
        $('.formation3text').toggle('slow');
    });
    $('#plusTimelineFormation4').mouseover(function(){
        $('.formation4title').transition({ opacity: '0.8'}, 500);
        $('.formation4title').stop().transition({ opacity: '0.8'}, 500);
        $('#plusTimelineFormation4').transition({ rotate: '180deg' });
        $('#plusTimelineFormation4').stop().transition({ rotate: '180deg' });
        $('#plusTimelineFormation4').attr('src', 'assets/images/petiteclairegauche.png');
        $('#titleTimelineFormation4').css('color', '#fffef1');
        $('.formation4title').css('color', '#fffef1');
    });
    $('#plusTimelineFormation4').mouseout(function(){
        $('.formation4title').transition({ opacity: '0.3'}, 500);
        $('.formation4title').stop().transition({ opacity: '0.3'}, 500);
        $('#plusTimelineFormation4').transition({ rotate: '360deg' });
        $('#plusTimelineFormation4').stop().transition({ rotate: '360deg' });
        $('#plusTimelineFormation4').attr('src', 'assets/images/petitesombregauche.png');
        $('#titleTimelineFormation4').css('color', '#1d0029');
        $('.formation4title').css('color', '#1d0029');
    });
    $('#plusTimelineFormation4').click(function(){
        $('.formation4text').toggle('slow');
    });
     //...................................EXPERIENCES PRO......................................
     $('#plusTimelineXp1').mouseover(function(){
        $('.xp1title').transition({ opacity: '0.8'}, 500);
        $('.xp1title').stop().transition({ opacity: '0.8'}, 500);
        $('#plusTimelineXp1').transition({ rotate: '180deg' });
        $('#plusTimelineXp1').stop().transition({ rotate: '180deg' });
        $('#plusTimelineXp1').attr('src', 'assets/images/petiteclairedroite.png');
        $('#titleTimelineXp1').css('color', '#fffef1');
        $('.xp1title').css('color', '#fffef1');
    });
    $('#plusTimelineXp1').mouseout(function(){
        $('.xp1title').transition({ opacity: '0.3'}, 500);
        $('.xp1title').stop().transition({ opacity: '0.3'}, 500);
        $('#plusTimelineXp1').transition({ rotate: '360deg' });
        $('#plusTimelineXp1').stop().transition({ rotate: '360deg' });
        $('#plusTimelineXp1').attr('src', 'assets/images/petitesombredroite.png');
        $('#titleTimelineXp1').css('color', '#1d0029');
        $('.xp1title').css('color', '#1d0029');
    });
    $('#plusTimelineXp1').click(function(){
        $('.xp1text').toggle('slow');
    });
    $('#plusTimelineXp2').mouseover(function(){
        $('.xp2title').transition({ opacity: '0.8'}, 500);
        $('.xp2title').stop().transition({ opacity: '0.8'}, 500);
        $('#plusTimelineXp2').transition({ rotate: '180deg' });
        $('#plusTimelineXp2').stop().transition({ rotate: '180deg' });
        $('#plusTimelineXp2').attr('src', 'assets/images/grandeclairedroite.png');
        $('#titleTimelineXp2').css('color', '#fffef1');
        $('.xp2title').css('color', '#fffef1');
    });
    $('#plusTimelineXp2').mouseout(function(){
        $('.xp2title').transition({ opacity: '0.3'}, 500);
        $('.xp2title').stop().transition({ opacity: '0.3'}, 500);
        $('#plusTimelineXp2').transition({ rotate: '360deg' });
        $('#plusTimelineXp2').stop().transition({ rotate: '360deg' });
        $('#plusTimelineXp2').attr('src', 'assets/images/grandesombredroite.png');
        $('#titleTimelineXp2').css('color', '#1d0029');
        $('.xp2title').css('color', '#1d0029');
    });
        $('#plusTimelineXp2').click(function(){
            $('.xp2text').toggle('slow');
    });
    $('#plusTimelineXp3').mouseover(function(){
        $('.xp3title').transition({ opacity: '0.8'}, 500);
        $('.xp3title').stop().transition({ opacity: '0.8'}, 500);
        $('#plusTimelineXp3').transition({ rotate: '180deg' });
        $('#plusTimelineXp3').stop().transition({ rotate: '180deg' });
        $('#plusTimelineXp3').attr('src', 'assets/images/grandeclairegauche.png');
        $('#titleTimelineXp3').css('color', '#fffef1');
        $('.xp3title').css('color', '#fffef1');
    });
    $('#plusTimelineXp3').mouseout(function(){
        $('.xp3title').transition({ opacity: '0.3'}, 500);
        $('.xp3title').stop().transition({ opacity: '0.3'}, 500);
        $('#plusTimelineXp3').transition({ rotate: '360deg' });
        $('#plusTimelineXp3').stop().transition({ rotate: '360deg' });
        $('#plusTimelineXp3').attr('src', 'assets/images/grandesombregauche.png');
        $('#titleTimelineXp3').css('color', '#1d0029');
        $('.xp3title').css('color', '#1d0029');
    });
    $('#plusTimelineXp3').click(function(){
        $('.xp3text').toggle('slow');
    });
    $('#plusTimelineXp4').mouseover(function(){
        $('.xp4title').transition({ opacity: '0.8'}, 500);
        $('.xp4title').stop().transition({ opacity: '0.8'}, 500);
        $('#plusTimelineXp4').transition({ rotate: '180deg' });
        $('#plusTimelineXp4').stop().transition({ rotate: '180deg' });
        $('#plusTimelineXp4').attr('src', 'assets/images/petiteclairegauche.png');
        $('#titleTimelineXp4').css('color', '#fffef1');
        $('.xp4title').css('color', '#fffef1');
    });
    $('#plusTimelineXp4').mouseout(function(){
        $('.xp4title').transition({ opacity: '0.3'}, 500);
        $('.xp4title').stop().transition({ opacity: '0.3'}, 500);
        $('#plusTimelineXp4').transition({ rotate: '360deg' });
        $('#plusTimelineXp4').stop().transition({ rotate: '360deg' });
        $('#plusTimelineXp4').attr('src', 'assets/images/petitesombregauche.png');
        $('#titleTimelineXp4').css('color', '#1d0029');
        $('.xp4title').css('color', '#1d0029');
    });
    $('#plusTimelineXp4').click(function(){
        $('.xp4text').toggle('slow');
    });
    $('#plusTimelineXp5').mouseover(function(){
        $('.xp5title').transition({ opacity: '0.8'}, 500);
        $('.xp5title').stop().transition({ opacity: '0.8'}, 500);
        $('#plusTimelineXp5').transition({ rotate: '180deg' });
        $('#plusTimelineXp5').stop().transition({ rotate: '180deg' });
        $('#plusTimelineXp5').attr('src', 'assets/images/grandeclairegauche.png');
        $('#titleTimelineXp5').css('color', '#fffef1');
        $('.xp5title').css('color', '#fffef1');
    });
    $('#plusTimelineXp5').mouseout(function(){
        $('.xp5title').transition({ opacity: '0.3'}, 500);
        $('.xp5title').stop().transition({ opacity: '0.3'}, 500);
        $('#plusTimelineXp5').transition({ rotate: '360deg' });
        $('#plusTimelineXp5').stop().transition({ rotate: '360deg' });
        $('#plusTimelineXp5').attr('src', 'assets/images/grandesombregauche.png');
        $('#titleTimelineXp5').css('color', '#1d0029');
        $('.xp5title').css('color', '#1d0029');
    });
    $('#plusTimelineXp5').click(function(){
        $('.xp5text').toggle('slow');
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