import 'package:flutter/material.dart';

import '../../constants.dart';
import 'animated_progress_indicator.dart';

class Skills extends StatelessWidget {
  const Skills({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(vertical: defaultPadding),
          child: Text(
            "Skills",
            style: Theme.of(context).textTheme.subtitle2,
          ),
        ),
        Row(
          children: [
            Expanded(
              child: AnimatedCircularProgressIndicator(
                percentage: 0.85,
                label: "C++",
              ),
            ),
            SizedBox(
              width: defaultPadding,
            ),
            Expanded(
              child: AnimatedCircularProgressIndicator(
                percentage: 0.8,
                label: "Unity",
              ),
            ),
            SizedBox(
              width: defaultPadding,
            ),
            Expanded(
              child: AnimatedCircularProgressIndicator(
                percentage: 0.77,
                label: "Flutter",
              ),
            ),
          ],
        ),
        SizedBox(
          height: defaultPadding,
        ),
        Divider(),
        SizedBox(
          height: defaultPadding,
        ),
        AnimatedLinearProgressIndicator(
          percentage: 0.81,
          label: "Git",
        ),
        AnimatedLinearProgressIndicator(
          percentage: 0.73,
          label: "C#",
        ),
        AnimatedLinearProgressIndicator(
          percentage: 0.77,
          label: "OpenCV",
        ),
        AnimatedLinearProgressIndicator(
          percentage: 0.71,
          label: "Javascript",
        ),
      ],
    );
  }
}
