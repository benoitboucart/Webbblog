// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
// /*! SocialCount - v0.1.5 - 2013-01-22
// * https://github.com/filamentgroup/SocialCount
// * Copyright (c) 2013 zachleat; Licensed MIT */
// (function(e,t,n){function s(e,n){var r=t.createElement("social").style,i="webkit Moz o ms".split(" ");if(n in r)return!0;for(var s=0,o=i.length;s<o;s++)if(i[s]+e in r)return!0;return!1}function o(e){var t=e.split("/");return t.pop(),t.join("/")+"/"}function u(){var e;return n("script").each(function(){var t=this.src||"",n;if(t.match(a.scriptSrcRegex))return e=o(t),!1}),e}var r,i,a={isGradeA:"querySelectorAll"in t&&!e.blackberry&&!("ontouchstart"in window)&&!("onmsgesturechange"in window),minCount:1,serviceUrl:"service/index.php",initSelector:".socialcount",classes:{gradeA:"grade-a",active:"active",touch:"touch",hover:"hover",noTransforms:"no-transforms",showCounts:"counts",countContent:"count",minCount:"minimum",activateOnHover:"activate-on-hover",activateOnClick:"activate-on-click"},thousandCharacter:"K",millionCharacter:"M",missingResultText:"-",activateOnClick:!1,selectors:{facebook:".facebook",twitter:".twitter",googleplus:".googleplus"},locale:t.documentElement?t.documentElement.lang||"":"",googleplusTooltip:"table.gc-bubbleDefault",scriptSrcRegex:/socialcount[\w.]*.js/i,plugins:{init:[],bind:[]},cache:{},removeFileName:o,resolveServiceDir:u,isCssAnimations:function(){return s("AnimationName","animationName")},isCssTransforms:function(){return s("Transform","transform")},getUrl:function(e){return e.attr("data-url")||location.href},getShareText:function(e){return e.attr("data-share-text")||""},getFacebookAction:function(e){return(e.attr("data-facebook-action")||"like").toLowerCase()},isCountsEnabled:function(e){return e.attr("data-counts")==="true"},isSmallSize:function(e){return e.is(".socialcount-small")},getCounts:function(e,t){var r=a.selectors,s=a.cache,o={},f,l,c;for(c in r)f=e.find(r[c]),l=f.find("."+a.classes.countContent),l.length?o[c]=l:(o[c]=i.clone(),f.append(o[c]));return s[t]||(s[t]=n.ajax({url:u()+a.serviceUrl,data:{url:t},dataType:"json"})),s[t].done(function(t){for(var n in t)t.hasOwnProperty(n)&&o[n]&&t[n]>a.minCount&&o[n].addClass(a.classes.minCount).html(a.normalizeCount(t[n]))}),s[t]},init:function(e){var t=a.getFacebookAction(e),n=[t],r=a.isSmallSize(e),i=a.getUrl(e),s=a.plugins.init,o=a.isCountsEnabled(e);a.isGradeA&&n.push(a.classes.gradeA),a.isCssTransforms()||n.push(a.classes.noTransforms),o&&n.push(a.classes.showCounts),a.activateOnClick?n.push(a.classes.activateOnClick):n.push(a.classes.activateOnHover),a.locale&&n.push(a.locale),e.addClass(n.join(" "));for(var u=0,f=s.length;u<f;u++)s[u].call(e);a.isGradeA&&a.bindEvents(e,i,t,r),o&&!r&&a.getCounts(e,i)},normalizeCount:function(e){return!e&&e!==0?a.missingResultText:e>=1e6?Math.floor(e/1e6)+a.millionCharacter:e>=1e5?Math.floor(e/1e3)+a.thousandCharacter:e>1e3?(e/1e3).toFixed(1).replace(/\.0/,"")+a.thousandCharacter:e},bindEvents:function(e,i,s,o){function u(e,i,s){var o=!1,u=!1;e.closest("li").bind("mouseenter",function(e){var t=n(this).closest("li");t.addClass(a.classes.hover),u=!0,n(document).on("mouseenter.socialcount mouseleave.socialcount",a.googleplusTooltip,function(e){o=e.type==="mouseenter",!o&&!u&&t.removeClass(a.classes.hover)})}).bind("mouseleave",function(e){var t=this;window.setTimeout(function(){u=!1,!o&&!u&&(n(document).off(".socialcount"),n(t).closest("li").removeClass(a.classes.hover))},0)}),e.one(a.activateOnClick?"click":"mouseover",function(e){a.activateOnClick&&(e.preventDefault(),e.stopPropagation());var o=n(this),u=o.closest("li"),f=r.clone(),l=n(i),c=n('<div class="button"/>').append(l),h,p,d=n.Deferred();d.promise().always(function(){var e=u.find("iframe");e.length?e.bind("load",function(){f.remove()}):f.remove()}),u.addClass(a.classes.active).append(f).append(c),s?(h=t.createElement("script"),h.src=s,h.attachEvent?h.attachEvent("onreadystatechange",function(){(h.readyState==="loaded"||h.readyState==="complete")&&d.resolve()}):n(h).bind("load",d.resolve),t.body.appendChild(h)):l.is("iframe")&&d.resolve()})}if(!o){var f=a.getShareText(e);u(e.find(a.selectors.facebook+" a"),'<iframe src="//www.facebook.com/plugins/like.php?href='+encodeURI(i)+(a.locale?"&locale="+a.locale:"")+"&amp;send=false&amp;layout=button_count&amp;width=100&amp;show_faces=true&amp;action="+s+'&amp;colorscheme=light&amp;font=arial&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowTransparency="true"></iframe>'),u(e.find(a.selectors.twitter+" a"),'<a href="https://twitter.com/share" class="twitter-share-button" data-url="'+encodeURI(i)+'"'+(f?' data-text="'+f+'"':"")+' data-count="none" data-dnt="true">Tweet</a>',"//platform.twitter.com/widgets.js"),u(e.find(a.selectors.googleplus+" a"),'<div class="g-plusone" data-size="medium" data-annotation="none"></div>',"//apis.google.com/js/plusone.js")}var l=a.plugins.bind;for(var c=0,h=l.length;c<h;c++)l[c].call(e,u,i,o)}};n(function(){r=n("<div>").addClass("loading").html(a.isCssAnimations()?(new Array(4)).join('<div class="dot"></div>'):"Loading"),i=n("<span>").addClass(a.classes.countContent).html("&#160;"),n(a.initSelector).each(function(){var e=n(this);a.init(e)})}),window.SocialCount=a})(window,window.document,jQuery);


/*global jQuery console */
;(function( win, doc, $ ) {

    var $loadingIndicator,
        $count;

    function featureTest( prop, unprefixedProp ) {
        var style = doc.createElement('social').style,
            prefixes = 'webkit Moz o ms'.split(' ');

        if( unprefixedProp in style ) {
            return true;
        }
        for( var j = 0, k = prefixes.length; j < k; j++ ) {
            if( ( prefixes[ j ] + prop ) in style ) {
                return true;
            }
        }
        return false;
    }

    function removeFileName( src ) {
        var split = src.split( '/' );
        split.pop();
        return split.join( '/' ) + '/';
    }

    function resolveServiceDir() {
        var baseUrl;

        // $( 'script' ).each(function() {
        //     var src = this.src || '',
        //         dir;
        //     if( src.match( SocialCount.scriptSrcRegex ) ) {
        //         baseUrl = removeFileName( src );
        //         return false;
        //     }
        // });
        baseUrl = SocialCount.baseURL;

        return baseUrl;
    }

    var SocialCount = {
        baseURL: "http://webbb.be/blog/wp-content/themes/webbblog/assets/",
        // For A-grade experience, require querySelector (IE8+) and not BlackBerry or touchscreen
        isGradeA: 'querySelectorAll' in doc && !win.blackberry && !('ontouchstart' in window) && !('onmsgesturechange' in window),
        minCount: 0,
        serviceUrl: 'service/index.php',
        initSelector: '.socialcount',
        classes: {
            gradeA: 'grade-a',
            active: 'active',
            touch: 'touch',
            hover: 'hover',
            noTransforms: 'no-transforms',
            showCounts: 'counts',
            countContent: 'count',
            minCount: 'minimum',
            activateOnHover: 'activate-on-hover',
            activateOnClick: 'activate-on-click'
        },
        thousandCharacter: 'K',
        millionCharacter: 'M',
        missingResultText: '-',
        activateOnClick: false, // default is hover
        selectors: {
            facebook: '.facebook',
            twitter: '.twitter',
            googleplus: '.googleplus'
        },
        locale: doc.documentElement ? ( doc.documentElement.lang || '' ) : '',
        googleplusTooltip: 'table.gc-bubbleDefault',
        scriptSrcRegex: /socialcount[\w.]*.js/i,
        plugins: {
            init: [],
            bind: []
        },

        // private, but for testing
        cache: {},

        removeFileName: removeFileName,
        resolveServiceDir: resolveServiceDir,

        isCssAnimations: function() {
            return featureTest( 'AnimationName', 'animationName' );
        },
        isCssTransforms: function() {
            return featureTest( 'Transform', 'transform' );
        },
        getUrl: function( $el ) {
            return $el.attr('data-url') || location.href;
        },
        // Currently only available on Twitter
        getShareText: function( $el ) {
            return $el.attr('data-share-text' ) || '';
        },
        getFacebookAction: function( $el ) {
            return ( $el.attr('data-facebook-action' ) || 'like' ).toLowerCase();
        },
        isCountsEnabled: function( $el ) {
            return $el.attr('data-counts') === 'true';
        },
        isSmallSize: function( $el ) {
            return $el.is( '.socialcount-small' );
        },
        getCounts: function( $el, url ) {
            var map = SocialCount.selectors,
                cache = SocialCount.cache,
                counts = {},
                $networkNode,
                $countNode,
                j;

            for( j in map ) {
                $networkNode = $el.find( map[ j ] );
                $countNode = $networkNode.find( '.' + SocialCount.classes.countContent );

                if( $countNode.length ) {
                    counts[ j ] = $countNode;
                } else {
                    counts[ j ] = $count.clone();
                    $networkNode.append( counts[ j ] );
                }
            }

            if( !cache[ url ] ) {
                cache[ url ] = $.ajax({
                    url: resolveServiceDir() + SocialCount.serviceUrl,
                    data: {
                        url: url
                    },
                    dataType: 'json'
                });
            }

            cache[ url ].done( function complete( data ) {
                for( var j in data ) {
                    if( data.hasOwnProperty( j ) ) {
                        if( counts[ j ] && data[ j ] > SocialCount.minCount ) {
                            counts[ j ].addClass( SocialCount.classes.minCount )
                                .html( SocialCount.normalizeCount( data[ j ] ) );
                        }
                    }
                }
            });

            return cache[ url ];
        },
        init: function( $el ) {
            var facebookAction = SocialCount.getFacebookAction( $el ),
                classes = [ facebookAction ],
                isSmall = SocialCount.isSmallSize( $el ),
                url = SocialCount.getUrl( $el ),
                initPlugins = SocialCount.plugins.init,
                countsEnabled = SocialCount.isCountsEnabled( $el );

            if( SocialCount.isGradeA ) {
                classes.push( SocialCount.classes.gradeA );
            }
            if( !SocialCount.isCssTransforms() ) {
                classes.push( SocialCount.classes.noTransforms );
            }
            if( countsEnabled ) {
                classes.push( SocialCount.classes.showCounts );
            }
            if( SocialCount.activateOnClick ) {
                classes.push( SocialCount.classes.activateOnClick );
            } else {
                classes.push( SocialCount.classes.activateOnHover );
            }
            if( SocialCount.locale ) {
                classes.push( SocialCount.locale );
            }
            $el.addClass( classes.join(' ') );

            for( var j = 0, k = initPlugins.length; j < k; j++ ) {
                initPlugins[ j ].call( $el );
            }

            if( SocialCount.isGradeA ) {
                SocialCount.bindEvents( $el, url, facebookAction, isSmall );
            }

            if( countsEnabled && !isSmall ) {
                SocialCount.getCounts( $el, url );
            }
        },
        normalizeCount: function( count ) {
            if( !count && count !== 0 ) {
                return SocialCount.missingResultText;
            }
            // > 1M
            if( count >= 1000000 ) {
                return Math.floor( count / 1000000 ) + SocialCount.millionCharacter;
            }
            // > 100K
            if( count >= 100000 ) {
                return Math.floor( count / 1000 ) + SocialCount.thousandCharacter;
            }
            if( count > 1000 ) {
                return ( count / 1000 ).toFixed( 1 ).replace( /\.0/, '' ) + SocialCount.thousandCharacter;
            }
            return count;
        },
        bindEvents: function( $el, url, facebookAction, isSmall ) {
            function bind( $a, html, jsUrl ) {
                // IE bug (tested up to version 9) with :hover rules and iframes.
                var isTooltipActive = false,
                    isHoverActive = false;

                $a.closest( 'li' ).bind( 'mouseenter', function( event ) {
                    var $li = $( this ).closest( 'li' );

                    $li.addClass( SocialCount.classes.hover );

                    isHoverActive = true;

                    $( document ).on( 'mouseenter.socialcount mouseleave.socialcount', SocialCount.googleplusTooltip, function( event ) {
                        isTooltipActive = event.type === 'mouseenter';

                        if( !isTooltipActive && !isHoverActive ) {
                            $li.removeClass( SocialCount.classes.hover );
                        }
                    });
                }).bind( 'mouseleave', function( event ) {
                    var self = this;
                    window.setTimeout(function() {
                        isHoverActive = false;

                        if( !isTooltipActive && !isHoverActive ) {
                            $( document ).off( '.socialcount' );
                            $( self ).closest( 'li' ).removeClass( SocialCount.classes.hover );
                        }
                    }, 0);
                });

                $a.one( SocialCount.activateOnClick ? 'click' : 'mouseover', function( event ) {
                    if( SocialCount.activateOnClick ) {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                    var $self = $( this ),
                        $parent = $self.closest( 'li' ),
                        $loading = $loadingIndicator.clone(),
                        $content = $( html ),
                        $button = $( '<div class="button"/>' ).append( $content ),
                        js,
                        $iframe,
                        deferred = $.Deferred();

                    deferred.promise().always(function() {
                        // Remove Loader
                        var $iframe = $parent.find('iframe');

                        if( $iframe.length ) {
                            $iframe.bind( 'load', function() {
                                $loading.remove();
                            });
                        } else {
                            $loading.remove();
                        }
                    });

                    $parent
                        .addClass( SocialCount.classes.active )
                        .append( $loading )
                        .append( $button );

                    if( jsUrl ) {
                        js = doc.createElement( 'script' );
                        js.src = jsUrl;

                        // IE8 doesn't do script onload.
                        if( js.attachEvent ) {
                            js.attachEvent( 'onreadystatechange', function() {
                                if( js.readyState === 'loaded' || js.readyState === 'complete' ) {
                                    deferred.resolve();
                                }
                            });
                        } else {
                            $( js ).bind( 'load', deferred.resolve );
                        }

                        doc.body.appendChild( js );
                    } else if( $content.is( 'iframe' ) ) {
                        deferred.resolve();
                    }
                });
            } // end bind()

            if( !isSmall ) {
                var shareText = SocialCount.getShareText( $el );

                bind( $el.find( SocialCount.selectors.facebook + ' a' ),
                    '<iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent( url ) +
                        // ( SocialCount.locale ? '&locale=' + SocialCount.locale : '' ) +
                        '&amp;send=false&amp;layout=button_count&amp;width=100&amp;show_faces=true&amp;action=' + facebookAction +
                        '&amp;colorscheme=light&amp;font=arial&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowTransparency="true"></iframe>' );

                bind( $el.find( SocialCount.selectors.twitter + ' a' ),
                    '<a href="https://twitter.com/share" class="twitter-share-button"' +
                        ' data-url="' + encodeURIComponent( url ) + '"' +
                        ( shareText ? ' data-text="' + shareText + '"': '' ) +
                        ' data-count="none" data-dnt="true">Tweet</a>',
                    '//platform.twitter.com/widgets.js' );

                bind( $el.find( SocialCount.selectors.googleplus + ' a' ),
                    '<div class="g-plusone" data-size="medium" data-annotation="none"></div>',
                    '//apis.google.com/js/plusone.js' );
            }

            // Bind events on other non-stock widgets, like sharethis
            var bindPlugins = SocialCount.plugins.bind;
            for( var j = 0, k = bindPlugins.length; j < k; j++ ) {
                bindPlugins[ j ].call( $el, bind, url, isSmall );
            }
        } // end bindEvents()
    };

    $(function() {
        // Thanks to http://codepen.io/ericmatthys/pen/FfcEL
        $loadingIndicator = $('<div>')
            .addClass('loading')
            .html( SocialCount.isCssAnimations() ? new Array(4).join('<div class="dot"></div>') : 'Loading' );

        $count = $('<span>')
            .addClass( SocialCount.classes.countContent )
            .html('&#160;');

        $( SocialCount.initSelector ).each(function() {
            var $el = $(this);
            SocialCount.init($el);
        });
    });

    window.SocialCount = SocialCount;

}( window, window.document, jQuery ));