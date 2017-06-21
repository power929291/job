        $(function() {
            $(".box").fullpage({
                sectionsColor: ['#0DA5D6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
                verticalCentered: false,
                afterLoad: function(anchor, index) {
                    $(".section").eq(index - 1).addClass("current").siblings().removeClass("current");
                }
            });

        })