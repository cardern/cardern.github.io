 //    _
 //  .~q`,
 // {__,  \
 //     \' \
 //      \  \
 //       \  \
 //        \  `._            __.__
 //         \    ~-._  _.==~~     ~~--.._
 //          \        '  Woah so secret  ~-.
 //           \      _-   -_                `.
 //            \    /       }        .-    .  \
 //             `. |      /  }      (       ;  \
 //               `|     /  /       (       :   '\
 //                \    |  /        |      /       \
 //                 |     /`-.______.\     |~-.      \
 //                 |   |/           (     |   `.      \_
 //                 |   ||            ~\   \      '._    `-.._____..----..___
 //                 |   |/             _\   \         ~-.__________.-~~~~~~~~~'''
 //               .o'___/            .o______}


$(document).ready(function() {

    //Navbar

    $('.navbar-nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 400,
        scrollThreshold: 0.5,
        filter: ':not(#navbar-contact)',
        easing: 'swing',
    });

    //Email population - to defeat spambots

    var email1 = "cardern";
    var email2 = "@";
    var email3 = "gmail.com";
    var email4 = email1 + email2 + email3;
    $('.send-now').html("<a class='send-now' href=" + "mail" + "to:" + email1 + email2 + email3 + ">Email Me</a>");
    $('.email-address').html(email4);
});
