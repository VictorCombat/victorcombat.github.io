import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:web_portfolio/screens/home/components/home_banner.dart';
import 'package:web_portfolio/screens/home/components/my_projects.dart';
import 'package:web_portfolio/screens/home/home_screen.dart';
import 'package:web_portfolio/screens/main_screen.dart';

import 'constants.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'V.COMBAT Website Portfolio',
      theme: ThemeData.dark().copyWith(
        primaryColor: primaryColor,
        scaffoldBackgroundColor: bgColor,
        canvasColor: bgColor,
        textTheme: GoogleFonts.poppinsTextTheme(Theme.of(context).textTheme)
            .apply(bodyColor: Colors.white)
            .copyWith(
              bodyText1: TextStyle(color: bodyTextColor),
              bodyText2: TextStyle(color: bodyTextColor),
            ),
      ),
      home: HomeScreen(),
    );
  }
}
