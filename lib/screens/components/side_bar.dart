import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:web_portfolio/constants.dart';
import 'package:web_portfolio/screens/components/knowledges.dart';
import 'package:web_portfolio/screens/components/my_info.dart';
import 'package:web_portfolio/screens/components/skills.dart';
import 'dart:html' as html;

class SideBar extends StatelessWidget {
  const SideBar({
    Key? key,
  }) : super(key: key);

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
                    TextButton(
                      onPressed: () {},
                      child: FittedBox(
                        child: Row(
                          children: [
                            SvgPicture.asset("icons/download.svg"),
                            SizedBox(
                              width: defaultPadding / 2,
                            ),
                            Text(
                              "DOWNLOAD CV",
                              style: TextStyle(
                                color: Theme.of(context)
                                    .textTheme
                                    .bodyText1!
                                    .color,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
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
                  IconButton(
                    splashRadius: 0.1,
                    onPressed: () {
                      html.window.open(
                          'https://www.linkedin.com/in/victor-combat/',
                          "_blank");
                    },
                    icon: SvgPicture.asset("icons/linkedin.svg"),
                  ),
                  IconButton(
                    splashRadius: 0.1,
                    onPressed: () {
                      html.window
                          .open('mailto:victor.cmbt@gmail.com', "_blank");
                    },
                    icon: Icon(
                      Icons.email_rounded,
                      color: bodyTextColor,
                    ),
                  ),
                  IconButton(
                    splashRadius: 0.1,
                    onPressed: () {
                      html.window
                          .open('https://github.com/VictorCombat', "_blank");
                    },
                    icon: SvgPicture.asset("icons/github.svg"),
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
