import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:web_portfolio/constants.dart';
import 'package:web_portfolio/screens/components/knowledges.dart';
import 'package:web_portfolio/screens/components/my_info.dart';
import 'package:web_portfolio/screens/components/skills.dart';
// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

class SideBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: SafeArea(
        child: Column(
          children: [
            MyInfo(),
            Expanded(
              child: SingleChildScrollView(
                padding: EdgeInsets.symmetric(horizontal: defaultPadding),
                child: Column(
                  children: [
                    Skills(),
                    Knowledges(),
                    SizedBox(
                      height: defaultPadding,
                    ),
                    // TextButton(
                    //   onPressed: () {},
                    //   child: FittedBox(
                    //     child: Row(
                    //       children: [
                    //         SvgPicture.asset("icons/download.svg"),
                    //         SizedBox(
                    //           width: defaultPadding / 2,
                    //         ),
                    //         Text(
                    //           "DOWNLOAD CV",
                    //           style: TextStyle(
                    //             color: Theme.of(context)
                    //                 .textTheme
                    //                 .bodyText1!
                    //                 .color,
                    //           ),
                    //         ),
                    //       ],
                    //     ),
                    //   ),
                    // ),
                  ],
                ),
              ),
            ),
            Container(
              padding: EdgeInsets.symmetric(vertical: defaultPadding / 2.5),
              width: double.infinity,
              color: Color(0xFF24242E),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  BottomBarIconButton(
                    urlLink: "https://www.linkedin.com/in/victor-combat/",
                    iconLink: "icons/linkedin.svg",
                  ),
                  BottomBarIconButton(
                    urlLink: "mailto:victor.cmbt@gmail.com",
                    iconLink: "icons/email.svg",
                  ),
                  BottomBarIconButton(
                    urlLink: "https://github.com/VictorCombat",
                    iconLink: "icons/github.svg",
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class BottomBarIconButton extends StatefulWidget {
  final String? urlLink;
  final String? iconLink;

  const BottomBarIconButton({
    Key? key,
    required this.urlLink,
    required this.iconLink,
  }) : super(key: key);

  @override
  _BottomBarIconButtonState createState() =>
      _BottomBarIconButtonState(urlLink: this.urlLink, iconLink: this.iconLink);
}

class _BottomBarIconButtonState extends State<BottomBarIconButton> {
  final String? urlLink;
  final String? iconLink;
  bool _hover = false;

  _BottomBarIconButtonState({required this.urlLink, required this.iconLink});

  void _incrementEnter(PointerEvent details) {
    setState(() {
      _hover = true;
    });
  }

  void _incrementExit(PointerEvent details) {
    setState(() {
      _hover = false;
    });
  }

  Color setColor() {
    if (_hover)
      return Colors.white;
    else
      return bodyTextColor;
  }

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: _incrementEnter,
      onExit: _incrementExit,
      child: IconButton(
        splashRadius: 0.1,
        onPressed: () {
          html.window.open(this.urlLink!, "_blank");
        },
        icon: SvgPicture.asset(
          this.iconLink!,
          color: setColor(),
          height: 22.0,
        ),
      ),
    );
  }
}
