import 'package:flutter/material.dart';

import '../constants.dart';
import 'components/side_bar.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Container(
          constraints: BoxConstraints(maxWidth: maxWidth, maxHeight: maxHeight),
          child: Row(
            children: [
              Expanded(
                flex: 2,
                child: SideBar(),
              ),
              Expanded(
                  flex: 7,
                  child: Container(
                    color: Colors.blue,
                  ))
            ],
          ),
        ),
      ),
    );
  }
}
