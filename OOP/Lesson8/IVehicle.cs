namespace Lesson8;

interface IVehicle {
	bool StartEngine();

	void StopEngine(int val);

	int Speed {
		get; set;
	}
}