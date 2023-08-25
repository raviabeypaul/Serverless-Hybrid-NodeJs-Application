import { APIGatewayProxyEvent, Context } from "aws-lambda";
import {
  ServiceResponseDto,
  AwsAPIGatewayResponseDto
} from "helpers/ApiResponseDto";
import { AuthController } from "adapters/controllers/AuthController";
import { UserRepository } from "sample-app/repositories/userRepository";

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
) => {
  // console.log("Event => ", event);

  const response: Partial<ServiceResponseDto> = await AuthController(UserRepository()).login(
    JSON.parse(event.body)
  );

  console.log(`Service response => `, response);

  const apiResponse: AwsAPIGatewayResponseDto = {
    body: await JSON.stringify(response.result),
    statusCode: response.hasError == false ? 200 : response.httpStatusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  };

  return apiResponse;
};
