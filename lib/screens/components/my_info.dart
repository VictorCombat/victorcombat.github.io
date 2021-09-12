import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class MyInfo extends StatelessWidget {
  const MyInfo({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: 1.6,
      child: Container(
        color: Color(0xFF242430),
        child: Column(
          children: [
            Spacer(
              flex: 2,
            ),
            CircleAvatar(
              radius: 50,
              backgroundImage:
                  //AssetImage("images/photo_victor_1000x1000.jpg"),
                  NetworkImage(
                      "https://github.com/VictorCombat/victorcombat.github.io/blob/flutter-one-deploy/assets/images/photo_victor_1000x1000.jpg"),
              //AssetImage('images/photo_victor_1000x1000.jpg'),
            ),
            Spacer(),
            Text(
              "Victor Combat",
              style: Theme.of(context).textTheme.subtitle2,
            ),
            Text(
              "Student in IT Master degree\nLyon, France",
              textAlign: TextAlign.center,
              style: TextStyle(
                fontWeight: FontWeight.w200,
                height: 1.5,
              ),
            ),
            Spacer(
              flex: 2,
            ),
          ],
        ),
      ),
    );
  }
}
