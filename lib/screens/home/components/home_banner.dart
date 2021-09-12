import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';
import 'package:web_portfolio/constants.dart';
import 'package:web_portfolio/responsive.dart';
import 'package:flutter_svg/flutter_svg.dart';
// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

class HomeBanner extends StatelessWidget {
  const HomeBanner({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: Responsive.isMobile(context) ? 2.5 : 3,
      child: Stack(
        fit: StackFit.expand,
        children: [
          Image.asset(
            "banners/animated-mesh-neon.gif",
            fit: BoxFit.cover,
          ),
          Container(color: darkColor.withOpacity(0.66)),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: defaultPadding),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  "Hello World!",
                  style: Responsive.isDesktop(context)
                      ? Theme.of(context).textTheme.headline3!.copyWith(
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                          )
                      : Theme.of(context).textTheme.headline5!.copyWith(
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                          ),
                ),
                if (Responsive.isMobileLarge(context))
                  const SizedBox(height: defaultPadding / 2),
                MyBuildAnimatedText(),
                if (Responsive.isMobileLarge(context))
                  const SizedBox(height: defaultPadding / 2)
                else
                  const SizedBox(height: defaultPadding),
                ElevatedButton(
                  onPressed: () {
                    html.window.open(
                        'https://drive.google.com/file/d/13ZhkzzOq_nnk60onhC9ZedNe4aR99bMK/view?usp=sharing',
                        "_blank");
                  },
                  style: TextButton.styleFrom(
                    padding: EdgeInsets.symmetric(
                        horizontal: Responsive.isMobileLarge(context)
                            ? defaultPadding
                            : defaultPadding * 2,
                        vertical: Responsive.isMobileLarge(context)
                            ? defaultPadding
                            : defaultPadding * 1.2),
                    backgroundColor: primaryColor,
                  ),
                  child: FittedBox(
                    child: Row(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          SvgPicture.asset(
                            "icons/download.svg",
                            color: darkColor,
                          ),
                          SizedBox(
                            width: defaultPadding / 2,
                          ),
                          Text(
                            "DOWNLOAD CV",
                            style: TextStyle(
                                color: darkColor,
                                fontSize: Responsive.isMobileLarge(context)
                                    ? 11
                                    : 14),
                          ),
                        ]),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class MyBuildAnimatedText extends StatelessWidget {
  const MyBuildAnimatedText({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return DefaultTextStyle(
      style: Theme.of(context).textTheme.subtitle1!,
      maxLines: 1,
      child: Row(
        children: [
          if (Responsive.isMobileLarge(context))
            FlutterCodedText(text: "victor")
          else
            FlutterCodedText(text: "victor"),
          if (!Responsive.isMobileLarge(context))
            SizedBox(width: defaultPadding / 2)
          else
            SizedBox(width: defaultPadding / 4),
          Text("Keep on "),
          // Responsive.isMobile(context)
          //     ? Expanded(child: AnimatedText())
          AnimatedText(),
          if (!Responsive.isMobileLarge(context))
            SizedBox(width: defaultPadding / 2)
          else
            SizedBox(width: defaultPadding / 4),
          if (Responsive.isMobileLarge(context))
            FlutterCodedText(text: "combat")
          else
            FlutterCodedText(text: "combat"),
        ],
      ),
    );
  }
}

class AnimatedText extends StatelessWidget {
  const AnimatedText({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AnimatedTextKit(
      repeatForever: true,
      animatedTexts: [
        TyperAnimatedText(
          "learning.",
          speed: Duration(milliseconds: 60),
        ),
        TyperAnimatedText(
          "building.",
          speed: Duration(milliseconds: 60),
        ),
        TyperAnimatedText(
          "exploring.",
          speed: Duration(milliseconds: 60),
        ),
      ],
    );
  }
}

class FlutterCodedText extends StatelessWidget {
  final String? text;

  const FlutterCodedText({
    Key? key,
    required this.text,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text.rich(
      TextSpan(
        text: "<",
        children: [
          TextSpan(
            text: text,
            style: TextStyle(color: primaryColor),
          ),
          TextSpan(text: ">"),
        ],
      ),
    );
  }
}
