import 'package:flutter/material.dart';
import 'package:web_portfolio/screens/home/components/my_projects.dart';
import 'package:web_portfolio/screens/main_screen.dart';

import 'components/home_banner.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MainScreen(
      children: [HomeBanner(), MyProjects()],
    );
  }
}
